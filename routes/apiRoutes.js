const router = require('express').Router();
const path = require('path');
const fs = require('fs');
var UUID = require('uuid');

let notes = require('../db/db')

// API Routes
router.get('/notes', (req, res) => {
    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     let dbNotes = JSON.parse(data);
    //     res.send(dbNotes);
    //     if (err) {
    //         return;
    //     }
    // });
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let request = req.body;
    req.body.id = UUID.v1();
    console.log(req.body.id);
    notes.push(request);
    res.json(notes);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes))
    
});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params.id);
    let deletedId = notes.find(notes => notes.id === id); 
    if (deletedId) {
      notes = notes.filter(notes => notes.id !== id)
      res.end();
      res.status(200)
    }
    else {
      res.status(404)
    }
})



module.exports = router;