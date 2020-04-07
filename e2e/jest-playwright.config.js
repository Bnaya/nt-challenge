module.exports = {
  browsers: ["chromium", "webkit"],
  launchBrowserApp: {
    headless: process.env.HEADLESS !== "false",
  },
};
