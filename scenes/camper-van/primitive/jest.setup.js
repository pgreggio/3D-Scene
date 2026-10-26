var fs = require('fs');
var path = require('path');
var babel = require('@babel/core');
require('jest-canvas-mock');

jest.mock('three', function () {
    var actual = jest.requireActual('three');

    class HeadlessRenderer {
        constructor(params) {
            var p = params || {};
            this.domElement = p.canvas || globalThis.document.createElement('canvas');
            this.shadowMap = { enabled: false, type: actual.PCFShadowMap, autoUpdate: true, needsUpdate: false };
            this.toneMapping = actual.NoToneMapping;
            this.toneMappingExposure = 1;
            this.outputColorSpace = actual.SRGBColorSpace;
            this.autoClear = true;
            this.info = {
                render: { frame: 0, calls: 0, triangles: 0 },
                memory: {},
                programs: [],
                autoReset: true,
                reset: function () {}
            };
            this.capabilities = {
                isWebGL2: true,
                maxTextureSize: 4096,
                maxSamples: 4,
                precision: 'highp',
                getMaxAnisotropy: function () { return 1; }
            };
            this.extensions = { has: function () { return false; }, get: function () { return null; } };
            this.frames = 0;
            this._width = 300;
            this._height = 150;
            this._pixelRatio = 1;
            this._renderTarget = null;
            return new Proxy(this, {
                get: function (target, key) {
                    if (key in target) { return target[key]; }
                    return function () {};
                }
            });
        }
        setSize(w, h) {
            this._width = w;
            this._height = h;
            this.domElement.width = Math.floor(w * this._pixelRatio);
            this.domElement.height = Math.floor(h * this._pixelRatio);
        }
        getSize(v) {
            v.set(this._width, this._height);
            return v;
        }
        setPixelRatio(r) { this._pixelRatio = r; }
        getPixelRatio() { return this._pixelRatio; }
        getDrawingBufferSize(v) {
            v.set(Math.floor(this._width * this._pixelRatio), Math.floor(this._height * this._pixelRatio));
            return v;
        }
        getClearColor(c) { c.setRGB(0, 0, 0); return c; }
        getClearAlpha() { return 1; }
        getRenderTarget() { return this._renderTarget; }
        setRenderTarget(t) { this._renderTarget = t; }
        getActiveCubeFace() { return 0; }
        getActiveMipmapLevel() { return 0; }
        render(scene, camera) {
            if (this._renderTarget === null) { this.frames += 1; }
            this.info.render.frame += 1;
            if (scene.matrixWorldAutoUpdate !== false) { scene.updateMatrixWorld(); }
            if (!camera.parent) { camera.updateMatrixWorld(); }
        }
    }

    return Object.assign({}, actual, { WebGLRenderer: HeadlessRenderer });
});

function pageParts() {
    var html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var scripts = Array.prototype.slice.call(doc.querySelectorAll('script'));
    var moduleScript = scripts.find(function (s) { return s.type === 'module'; });
    if (!moduleScript) { throw new Error('no module script found in index.html'); }
    var code = moduleScript.textContent;
    scripts.forEach(function (s) { s.remove(); });
    return {
        head: doc.head.innerHTML,
        body: doc.body.innerHTML,
        htmlClass: doc.documentElement.className,
        code: code
    };
}

function setViewport(width, height) {
    Object.defineProperty(window, 'innerWidth', { value: width, configurable: true, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: height, configurable: true, writable: true });
    Object.defineProperty(window.HTMLElement.prototype, 'clientWidth', {
        configurable: true,
        get: function () { return window.innerWidth; }
    });
    Object.defineProperty(window.HTMLElement.prototype, 'clientHeight', {
        configurable: true,
        get: function () { return window.innerHeight; }
    });
}

function installBrowserGaps() {
    if (!window.matchMedia) {
        window.matchMedia = function () {
            return {
                matches: false,
                addListener: function () {},
                removeListener: function () {},
                addEventListener: function () {},
                removeEventListener: function () {},
                dispatchEvent: function () { return false; }
            };
        };
    }
    if (!window.Element.prototype.setPointerCapture) {
        window.Element.prototype.setPointerCapture = function () {};
    }
    if (!window.Element.prototype.releasePointerCapture) {
        window.Element.prototype.releasePointerCapture = function () {};
    }
    if (!window.Element.prototype.hasPointerCapture) {
        window.Element.prototype.hasPointerCapture = function () { return false; };
    }
    if (!window.PointerEvent) {
        window.PointerEvent = class PointerEvent extends window.MouseEvent {
            constructor(type, init) {
                super(type, init);
                var o = init || {};
                this.pointerId = o.pointerId === undefined ? 1 : o.pointerId;
                this.pointerType = o.pointerType === undefined ? 'mouse' : o.pointerType;
                this.isPrimary = o.isPrimary === undefined ? true : o.isPrimary;
            }
        };
    }
}

function waitFor(predicate, timeoutMs, label) {
    return new Promise(function (resolve, reject) {
        var start = Date.now();
        (function poll() {
            var value;
            try { value = predicate(); } catch (e) { value = null; }
            if (value) { resolve(value); return; }
            if (Date.now() - start >= timeoutMs) {
                reject(new Error('timed out waiting for ' + label));
                return;
            }
            setTimeout(poll, 10);
        })();
    });
}

global.loadCamp = function (options) {
    var opts = options || {};
    var width = opts.width === undefined ? 1440 : opts.width;
    var height = opts.height === undefined ? 900 : opts.height;
    setViewport(width, height);
    installBrowserGaps();
    var parts = pageParts();
    document.head.innerHTML = parts.head;
    document.body.innerHTML = parts.body;
    document.documentElement.className = parts.htmlClass;
    var result = babel.transformSync(parts.code, {
        babelrc: false,
        configFile: false,
        presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }]]
    });
    var mod = { exports: {} };
    var runner = new Function('require', 'module', 'exports', result.code);
    runner(require, mod, mod.exports);
    return waitFor(function () { return window.__campReady; }, 30000, '__campReady')
        .then(function () { return window.__camp; });
};

global.nextFrames = function (hook, n) {
    var count = n === undefined ? 1 : n;
    var start = hook.renderer.frames;
    return waitFor(function () { return hook.renderer.frames - start >= count; }, 10000, count + ' frame(s)');
};

global.dragCanvas = function (hook, dx, dy) {
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var el = hook.renderer.domElement;
    function fire(type, x, y, buttons) {
        el.dispatchEvent(new window.PointerEvent(type, {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            button: 0,
            buttons: buttons,
            pointerId: 1,
            pointerType: 'mouse',
            isPrimary: true
        }));
    }
    fire('pointerdown', cx, cy, 1);
    fire('pointermove', cx + dx, cy + dy, 1);
    fire('pointerup', cx + dx, cy + dy, 0);
};
