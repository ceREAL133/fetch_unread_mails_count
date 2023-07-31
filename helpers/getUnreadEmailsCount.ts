import { Page } from 'puppeteer';
import { xPath } from '../constants';

export const getUnreadEmailsCount = async (page: Page) => {
	try {
		await page.waitForXPath(xPath);

		let [el] = await page.$x(xPath);

		const names = await page.evaluate((name: any) => name.innerText, el);
		if (names) {
			return names;
		} else throw new Error('cannot check count of your unread msgs');
	} catch (error: any) {
		throw new Error(error);
	}
};
