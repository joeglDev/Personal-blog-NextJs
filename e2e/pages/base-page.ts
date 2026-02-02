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

  private async expectTheme(page: Page, theme: string) {
    return test.step(`Expect theme to be ${theme}`, async () => {
      await expect(page.getByText(`${theme} theme`)).toBeVisible();

      if (theme === "Light") {
        await expect(
          page.getByText("Please note that light mode is experimental"),
        ).toBeVisible();
      } else {
        await expect(
          page.getByText("Please note that light mode is experimental"),
        ).not.toBeVisible();
      }
    });
  }

  private async toggleTheme(page: Page, theme: string) {
    return test.step(`Toggle theme`, async () => {
      const isChecked = theme !== "Light";

      const themeSwitch = page.getByRole("switch", {
        name: "Set light / dark theme",
      });

      if (isChecked) {
        await expect(themeSwitch).toBeChecked();
      } else {
        await expect(themeSwitch).not.toBeChecked();
      }
      await themeSwitch.click();
    });
  }

  public async toggleColourTheme(page: Page, theme: string) {
    return test.step(`Toggle colour theme to ${theme}`, async () => {
      const otherTheme = theme === "Dark" ? "Light" : "Dark";
      await this.getSidebarButton(page).click();
      await expect(this.getNavSidebar(page)).toBeVisible();

      await this.expectTheme(page, theme);
      await this.toggleTheme(page, theme);
      await this.expectTheme(page, otherTheme);
      await this.toggleTheme(page, otherTheme);
      await this.expectTheme(page, theme);
    });
  }
}
