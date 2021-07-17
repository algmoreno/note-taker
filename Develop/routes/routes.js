const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const dbNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));

router.get('/notes', (req, res) => {
    res.json(dbNotes);
});

router.post('/notes', (req, res) => {
    let note = req.body;
    dbNotes.push(note);
    updateDbFile(); 
});

router.get('/notes/:id', (req, res) => {
    res.json(dbNotes[req.params.id])
});



router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, ('../public/notes.html')));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ('../public/index.html')));
})

function updateDbFile() {
    fs.writeFile('db/db.json', JSON.stringify(dbNotes, '/t'), err => {
        if (err) throw err;
        return true;
    })
};

module.exports = router;