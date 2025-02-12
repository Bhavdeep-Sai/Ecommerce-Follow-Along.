const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


router.get('/',(req,res)=>{
    return res.send("Hello World")
})

// User signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
