export default async function handler(req, res) {
    const API_KEY = process.env.PLAUSIBLE_API_KEY; // Set this securely in Vercel > Project > Environment Variables
    const siteId = "aimeter.fyi";
  
    const to = new Date().toISOString().split("T")[0];
    const from = new Date(new Date().setFullYear(new Date().getFullYear() - 1))
      .toISOString()
      .split("T")[0];
  
    const url = `https://plausible.io/api/v1/stats/aggregate?site_id=${siteId}&period=custom&date=${from},${to}&metrics=pageviews`;
  
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error from Plausible: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      res.status(200).json({ views: data.results.pageviews.value });
    } catch (error) {
      console.error("Error fetching Plausible pageviews:", error);
      res.status(500).json({ error: "Failed to fetch page views" });
    }
  }