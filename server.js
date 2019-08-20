const cors = require("cors");
const axios = require("axios");
const express = require("express");
const app = express();

app.use(cors());

app.get("/repos/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const githubResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    console.log(githubResponse);
    res.send(githubResponse.data);
  } catch (err) {
    console.log(err);
    res.send('error');
  }
  // res.setHeader
});

const PORT = 8080;
app.listen(PORT, console.log(`Server is Listening to ${PORT}...`));
