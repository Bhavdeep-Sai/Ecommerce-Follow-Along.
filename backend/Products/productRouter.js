const express = require("express");
const router = express.Router();
const Product = require("./productSchema");
const authenticate = require("../middleware/auth");
const upload = require("../multer");

router.post("/add", authenticate, upload.array("images", 5), async (req, res) => {
    try {
        const { name, price } = req.body;
        const userId = req.user.userId;

        if (!name || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const imagePaths = req.files.map(file => file.filename);
        const product = new Product({ name, price, images: imagePaths, userId });

        await product.save();
        res.status(201).json({ message: "Product added successfully!", product });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
