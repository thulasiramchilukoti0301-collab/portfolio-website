const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Save contact form message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong!' });
  }
});

module.exports = router;