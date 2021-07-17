const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ('../public/index.html')));
})

router.get('/api/notes', (req, res) => {
    console.log("hello");
    // res.send('<h1>hello</h1>')
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        console.log(data);
        const dbNotes = JSON.parse(data);
        console.log(dbNotes);
        res.send(dbNotes);
        if (err) {
            return;
        }
    })
});

router.post('/notes', (req, res) => {
    let note = req.body;
    dbNotes.push(note);
    updateDbFile(); 
});

// if err put in readfile
// router.get('/notes/:id', (req, res) => {
//     res.json(dbNotes[req.params.id])
// });



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