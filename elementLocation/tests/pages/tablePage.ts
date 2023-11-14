import { Locator, Page } from 'playwright/test';
import { Init } from 'v8';

class tablePage {

    private static instance: tablePage
    private page: Page
    private tableTd: Locator

    constructor(page: Page) {
        this.page = page
        this.tableTd = page.locator("//table[@class='table table_page_main_table ng-star-inserted']//tbody//tr//td//a");
    }
    tableCells = async (index: number) => { return await this.tableTd.nth(index).textContent() }
    countOfTbleRows =async () => {return await this.tableTd.count()}
    public static getInstance(page: Page): tablePage {
        if (!tablePage.instance) {
            tablePage.instance = new tablePage(page);
        }
        return tablePage.instance;
    }
}
export default tablePage;