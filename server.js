const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())


app.get('/repos', (req, res) => {

    res.json('suppose to return repos')
});

const PORT = 8080;
app.listen(PORT, console.log(`Server is Listening to ${PORT}...`));