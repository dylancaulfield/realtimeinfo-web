var express = require("express");
var app = new express();

app.get("/")

app.use("/irishrail", require("./services/irishrail.js"));
app.use("/dublin-bus", require("./services/dublin-bus"));
app.use("/bus-eireann", require("./services/bus-eireann"));
app.use("/luas", require("./services/luas"));

app.listen(3001);