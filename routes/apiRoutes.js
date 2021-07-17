const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const UUID = require('uuid');

// API Routes
router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        let dbNotes = JSON.parse(data);
        res.send(dbNotes);
        if (err) {
            return;
        }
    });
});

router.post('/notes', (req, res) => {
    req.body.id = UUID.v1();
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        let dbNotes = JSON.parse(data);
        // let note = req.body;
        dbNotes.push(req.body);
        // updateDbFile(note); 
    fs.writeFile('./db/db.json', JSON.stringify(dbNotes), (err) => {
            if (err) {
                console.log("error")
            }
            res.json(req.body);
        })
    });
});

router.delete('/notes/:id')
// router.get('/notes/:id', (req, res) => {
//     fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
//         const dbNotes = JSON.parse(data);
//     res.send(dbNotes[req.params.id])
//     })
// });


module.exports = router;