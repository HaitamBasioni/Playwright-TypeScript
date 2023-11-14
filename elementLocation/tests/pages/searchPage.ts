import { Locator, Page } from "playwright/test"

class searchPage {
  private static instance: searchPage
  //locators;
  private typeOfSearch: Locator
  private searchButton: Locator
  private page: Page

  constructor(page: Page) {
    this.page = page
    this.typeOfSearch = page.locator("//div[@class='date_sorting']//select");
    this.searchButton = page.locator("//button[@class='sort_table sort_action_buttons btn-block']");
  }
  async searchFullProccess() {
    await this.typeOfSearch.click();
    await this.typeOfSearch.selectOption({ value: '3' });
    await this.searchButton.click();
  }

  headerAfterSearch = async () => { return await this.page.locator("//div[@class='general_popover_inner']//h2").textContent() };

  public static getInstance(page: Page): searchPage {
    if (!searchPage.instance) {
      searchPage.instance = new searchPage(page);
    }
    return searchPage.instance;
  }
}




export default searchPage