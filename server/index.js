const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");
const { getFortune } = require("./controller");
const { getAllNames } = require("./controller");
const { putName } = require("./controller");
const { postName } = require("./controller");
const { deleteNames } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get("/api/names", getAllNames);
app.put("/api/names", putName);
app.post("/api/names", postName);
app.delete("/api/names", deleteNames);

app.listen(4000, () => console.log("Server running on 4000"));
