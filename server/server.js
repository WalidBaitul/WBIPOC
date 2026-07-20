const express = require("express");
const foodDB = require("./singleton");

const app = express();
const PORT = process.env.PORT || 3000;

// Lets the server accept JSON data
app.use(express.json());
app.use(express.static("public"));

// Returns all the food items
app.get("/foods", (req, res) => {
    console.log("Someone requested the food list.");
    res.status(200).json(foodDB.getAll());
});

// If the page doesn't exist
app.use((req, res) => {
    res.status(404).json({ message: "Page not found" });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
}

module.exports = app;