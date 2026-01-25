import { test } from "@playwright/test";
import { AboutPage, IndexPage } from "@/e2e/pages";

let aboutPage: AboutPage;
let indexPage: IndexPage;

test.beforeEach(async ({ page }) => {
  aboutPage = new AboutPage();
  indexPage = new IndexPage();

  await indexPage.navigateToPage(page);
});

test("index page to about page", async ({ page }) => {
  await indexPage.expectTitle(page);

  // to the about page
  await indexPage.navigateToPageUsingSidebar(page, "About");
  await aboutPage.expectTitle(page);

  // back to the index page
  await aboutPage.navigateToPageUsingSidebar(page, "Blog");
  await indexPage.expectTitle(page);
});
