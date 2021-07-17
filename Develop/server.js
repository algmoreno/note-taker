const express = require('express');
const apiRoutes = require('./routes/routes');
const htmlRoutes = require('./routes/routes');

const PORT = process.env.PORT || 3001;
const app = express();  

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});