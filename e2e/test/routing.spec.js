const { url } = require("../utils/url");

describe("Routing", () => {
  it("should redirect from / to /home", async () => {
    await page.goto(url);
    await expect(page).toHaveText('[data-testid="title"]', "NT Challenge");
  });

  it("should allow navigating directly to /home", async () => {
    await page.goto(`${url}/home`);
    await expect(page).toHaveText('[data-testid="title"]', "NT Challenge");
  });
});
