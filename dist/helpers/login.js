"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const constants_1 = require("../constants");
const login = async (page, username, password) => {
    await page.setUserAgent(constants_1.UserAgent);
    await page.goto(constants_1.loginUrl, { waitUntil: 'networkidle2' });
    await page.type('input[type="email"]', username);
    await page.keyboard.press('Enter');
    await page.waitForSelector('input[type="password"]', { visible: true });
    await page.type('input[type="password"]', password);
    await page.keyboard.press('Enter');
};
exports.login = login;
