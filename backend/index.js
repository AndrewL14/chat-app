const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
    'https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-key": "a1486b33-e25d-48c7-84f5-f8651e0f9200"}}
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);