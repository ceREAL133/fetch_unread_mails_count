import { Page } from 'puppeteer';
import { UserAgent, loginUrl } from '../constants';

export const login = async (page: Page, username: string, password: string) => {
	await page.setUserAgent(UserAgent);
	await page.goto(loginUrl, { waitUntil: 'networkidle2' });

	await page.type('input[type="email"]', username as string);
	await page.keyboard.press('Enter');

	await page.waitForSelector('input[type="password"]', { visible: true });
	await page.type('input[type="password"]', password as string);
	await page.keyboard.press('Enter');
};
