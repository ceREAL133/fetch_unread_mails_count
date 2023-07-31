"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const dotenv_1 = __importDefault(require("dotenv"));
const getUnreadEmailsCount_1 = require("./helpers/getUnreadEmailsCount");
const login_1 = require("./helpers/login");
dotenv_1.default.config();
const { GOOGLE_USERNAME, GOOGLE_PASSWORD } = process.env;
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
(async () => {
    const browser = await puppeteer_extra_1.default.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--disable-gpu',
            '--enable-webgl',
            '--window-size=800,800',
        ],
    });
    const page = await browser.newPage();
    await (0, login_1.login)(page, GOOGLE_USERNAME, GOOGLE_PASSWORD);
    const unreadMails = await (0, getUnreadEmailsCount_1.getUnreadEmailsCount)(page);
    console.log(`you have ${unreadMails} unread mails`);
    await browser.close();
})();
