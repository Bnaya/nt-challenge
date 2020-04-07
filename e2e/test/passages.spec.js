/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

const { url } = require("../utils/url");

describe("Passages", () => {
  beforeAll(async () => {
    await page.goto(`${url}/home`);
  });

  it("should complete a passage", async () => {
    const checkbox = await page.$("ion-checkbox");
    expect(await checkbox.evaluate((el) => el.checked)).toBe(false);

    await checkbox.check();
    expect(await checkbox.evaluate((el) => el.checked)).toBe(true);
  });

  it("should persist completed passages between page refreshes", async () => {
    await page.reload();
    const checkbox = await page.$("ion-checkbox");
    const checked = await checkbox.evaluate((el) => el.checked);

    expect(checked).toBe(true);
  });

  it("should clear checked state when the day changes", async () => {
    // Ugly sure, but better than nothing :)
    await page.evaluate(() => {
      const storage = JSON.parse(localStorage.getItem("completed-passages"));
      storage.key = "foo";
      localStorage.setItem("completed-passages", JSON.stringify(storage));
    });

    await page.reload();
    const checkbox = await page.$("ion-checkbox");
    const checked = await checkbox.evaluate((el) => el.checked);

    expect(checked).toBe(false);
  });
});
