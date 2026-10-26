// Jest configuration — replaces playwright.config.js
/** @type {import('jest').Config} */
module.exports = {
    testMatch: ['**/tests/*.test.js'],
    testTimeout: 30000,
};
