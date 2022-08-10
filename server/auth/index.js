const express = require("express");
const bodyParser = require('body-parser');

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: 'yawn'
  });
});

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.json({
        message: 'check'
    });
});

module.exports = router;
