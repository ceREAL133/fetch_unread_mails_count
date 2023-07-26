import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import dotenv from 'dotenv';
import { getUnreadEmailsCount } from './helpers/getUnreadEmailsCount';
import { login } from './helpers/login';

dotenv.config();

const { GOOGLE_USERNAME, GOOGLE_PASSWORD } = process.env;

puppeteer.use(StealthPlugin());

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: [
			'--no-sandbox',
			'--disable-gpu',
			'--enable-webgl',
			'--window-size=800,800',
		],
	});

	const page = await browser.newPage();

	await login(page, GOOGLE_USERNAME as string, GOOGLE_PASSWORD as string);

	const unreadMails = await getUnreadEmailsCount(page);

	console.log(`you have ${unreadMails} unread mails`);

	await browser.close();
})();
