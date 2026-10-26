// Playwright configuration for The Old Oak.
//
// Runs Chromium headless using SwiftShader for software WebGL so the
// inline Three.js scene renders without a GPU. The page is served
// from this directory by a tiny static server so localStorage works.
// The procedural scene compiles ~25 shaders and draws a 4096px shadow map
// on a software rasteriser, so each test gets a generous budget.

const { defineConfig } = require('@playwright/test');

const PORT = 4173;

module.exports = defineConfig({
  testDir: 'tests',
  testMatch: /\.test\.js$/,
  timeout: 600000,
  retries: 1,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: [
        '--use-gl=angle',
        '--use-angle=swiftshader',
        '--enable-unsafe-swiftshader',
        '--enable-webgl',
        '--disable-gpu-sandbox',
        '--no-sandbox',
        '--disable-dev-shm-usage'
      ]
    }
  },
  webServer: {
    command: `node -e "const http=require('http'),fs=require('fs'),p=require('path');const root=process.cwd();const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png'};http.createServer((req,res)=>{let u=decodeURIComponent(req.url.split('?')[0]);let f=p.join(root,u==='/'?'index.html':u);if(!f.startsWith(root)){res.writeHead(403);return res.end();}fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end('404');}res.writeHead(200,{'Content-Type':mime[p.extname(f)]||'application/octet-stream'});res.end(d);});}).listen(${PORT},'127.0.0.1',()=>console.log('serving on '+${PORT}));"`,
    url: `http://127.0.0.1:${PORT}`,
    reuseExistingServer: true,
    timeout: 30000
  }
});
