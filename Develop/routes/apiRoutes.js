const router = require('express').Router();
const fs = require('fs');
const path = require('path')

router.get('/notes', (req, res) => {
    const readFile = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    res.json(readFile);
});

module.exports = router;