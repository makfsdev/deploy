const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();
const path = require("path");

// import routes
// const authRoutes = require('./routes/auth')

// app
const app = express();

// db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());


// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000'​, 'http://localhost:8080'​, 'https://shrouded-journey-38552.herokuapp.com'​]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

//routes middleware
// app.use('/api', authRoutes);

//requiring all route as prefix
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// Serve static

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
