// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.json({ message: "No API access error" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


