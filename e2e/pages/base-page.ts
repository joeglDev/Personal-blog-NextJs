import { expect, Page, test } from "@playwright/test";

export class BasePage {
  // properties
  public pageTitle = "";
  public baseUrl = "http://localhost:3000";
  public pageUrl = "";

  // methods
  private getSidebarButton = (page: Page) =>
    page.getByRole("button", { name: "Click to open navigation drawer." });
  private getNavSidebar = (page: Page) => page.getByTestId("nav-sidebar");
  private getNavElement = (page: Page, targetPage: string) =>
    this.getNavSidebar(page).getByText(targetPage);

  public async expectTitle(page: Page) {
    return test.step(`Assert that the ${this.pageTitle} page title is present`, async () => {
      await expect(
        page.getByRole("heading", { name: this.pageTitle }),
      ).toBeVisible();
    });
  }

  public async navigateToPage(page: Page) {
    return test.step(`Navigate to the ${this.pageUrl} page`, async () =>
      await page.goto(this.pageUrl));
  }

  public async navigateToPageUsingSidebar(page: Page, targetPage: string) {
    return test.step(`Navigate to the ${targetPage} page using the sidebar`, async () => {
      await this.getSidebarButton(page).click();
      await expect(this.getNavSidebar(page)).toBeVisible();
      await this.getNavElement(page, targetPage).click();
    });
  }
}
