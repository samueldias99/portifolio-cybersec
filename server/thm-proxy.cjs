const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/thm/:username/completed", async (req, res) => {
  const username = req.params.username;
  if (!username) return res.status(400).json({ error: "username required" });

  const apiUrl = `https://tryhackme.com/api/user/${encodeURIComponent(username)}/rooms/completed`;
  try {
    const apiResp = await axios.get(apiUrl, { timeout: 10000 });
    if (
      apiResp &&
      apiResp.headers &&
      apiResp.headers["content-type"] &&
      apiResp.headers["content-type"].includes("application/json")
    ) {
      return res.json({ source: "api", rooms: apiResp.data });
    }
    if (apiResp && apiResp.data && typeof apiResp.data === "object") {
      return res.json({ source: "api", rooms: apiResp.data });
    }
  } catch (e) {
    console.error(
      "API fetch failed, falling back to HTML scraping:",
      e.message,
    );
  }

  try {
    const profileUrl = `https://tryhackme.com/profile/${encodeURIComponent(username)}`;
    const pageResp = await axios.get(profileUrl, { timeout: 10000 });
    const html = pageResp.data;
    const $ = cheerio.load(html);
    const rooms = [];

    $('a[href^="/room/"]').each((i, el) => {
      const href = $(el).attr("href");
      const slug = href.split("/room/")[1] || "";
      const title = $(el).text().trim() || slug;
      const url = `https://tryhackme.com${href}`;
      if (!rooms.find((r) => r.url === url)) {
        rooms.push({ title, slug, url });
      }
    });

    return res.json({ source: "scrape", rooms });
  } catch (err) {
    console.error("Scraping failed:", err.message);
    return res.status(500).json({ error: "Failed to retrieve rooms" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`THM proxy listening on http://localhost:${port}`),
);
