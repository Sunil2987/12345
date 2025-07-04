export default async function handler(req, res) {
  const action = req.query.action;

  if (action === "status") {
    return res.status(200).json({
      success: true,
      message: "Bot is live",
      timestamp: new Date().toISOString()
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head><title>US Stock Monitor</title></head>
      <body>
        <h1>Stock Bot Running</h1>
        <p><a href="?action=status">Check Status</a></p>
      </body>
    </html>
  `);
}
