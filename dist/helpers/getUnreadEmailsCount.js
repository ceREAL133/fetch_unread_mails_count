"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnreadEmailsCount = void 0;
const constants_1 = require("../constants");
const getUnreadEmailsCount = async (page) => {
    try {
        await page.waitForXPath(constants_1.xPath);
        let [el] = await page.$x(constants_1.xPath);
        const names = await page.evaluate((name) => name.innerText, el);
        if (names) {
            return names;
        }
        else
            throw new Error('cannot check count of your unread msgs');
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.getUnreadEmailsCount = getUnreadEmailsCount;
