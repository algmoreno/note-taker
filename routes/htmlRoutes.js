const router = require('express').Router();
const path = require('path');

// HTML Routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, ('../public/notes.html')));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, ('../public/index.html')));
});

// function updateDbFile(note) {
//     console.log(note)
//     // fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
//     //     const dbNotes = JSON.parse(data);
//     fs.writeFile('db/db.json', JSON.stringify(note, '/t'), err => {
//         if (err) throw err;
//         return true;
//     })
// // })
// };

module.exports = router;