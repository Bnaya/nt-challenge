exports.url =
  process.env.BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://nt-challenge.web.app"
    : "http://localhost:8100");
