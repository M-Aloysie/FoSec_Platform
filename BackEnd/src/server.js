require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const routes = require("./routes");
const { connect } = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
