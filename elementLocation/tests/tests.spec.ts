import { test, Page, Browser, expect } from 'playwright/test';
import searchPage from './pages/searchPage'
import tablePage from './pages/tablePage'

test.describe('all tests', () => {
    let page: Page
    let search: searchPage;
    let table: tablePage;


    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://www.tase.co.il/he/market_data/securities/data/stocks');
        search = searchPage.getInstance(page);
        table = tablePage.getInstance(page);
    });

    test.afterEach(async () => {
        await page.close();
    });


    test('checking the header change after search', async () => {
        await search.searchFullProccess();
        let heder = await search.headerAfterSearch()
        expect(heder).toBe('נתוני מסחר - כתבי אופציה')
    });

    test('testing the firsr row in the table', async () => {
        await search.searchFullProccess();
        let first = await table.tableCells(0);
        expect(first).toBe('איביאי חיתוםאפ1')
    });

    test('testing the last td link name ', async () => {
        await search.searchFullProccess();
        let first = await table.tableCells(1);
        expect(first).toBe('אידומו     אפ 1');

    })

});