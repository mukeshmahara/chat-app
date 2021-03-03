const express = require("express");
const socket = require("socket.io");
const path = require("path");
const route = require("./routes/router");
const bodyparser = require("body-parser");

const port = process.env.PORT || 4000;

const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);



app.use("/", require("./routes/router"));

app.use(express.static("assets"));

app.set("view engine", "ejs");

server = app.listen(port, () => {
  console.log(`Serever started at http://localhost:${port}`);
});

// Socket Setup
var io = socket(server);
io.on("connection", (socket) => {

  //handle chat event
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
  //  handle typing event
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
