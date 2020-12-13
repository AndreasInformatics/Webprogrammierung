const express = require("express");
const path = require("path");
const app = express();

//Alle requests werden an frontend/static weitergeleitet 
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//Alle Pfade werden an die index.html weitergeleitet
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

//Legt fest welcher Port verwendet wird: hier Port 300
app.listen(process.env.PORT || 3000, () => console.log("Server running..."));