import { Page } from 'puppeteer';

export const getUnreadEmailsCount = async (page: Page) => {
	try {
		await page.waitForXPath(
			'/html/body/div[7]/div[3]/div/div[2]/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div[1]/div/div[1]/div/div/div[2]/div'
		);

		let [el] = await page.$x(
			'/html/body/div[7]/div[3]/div/div[2]/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div[1]/div/div[1]/div/div/div[2]/div'
		);

		const names = await page.evaluate((name: any) => name.innerText, el);
		if (names) {
			return names;
		} else throw new Error('cannot check count of your unread msgs');
	} catch (error: any) {
		throw new Error(error);
	}
};
