/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
})

app.use(jsonParser)
app.use(urlEncodedParser)

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.")
})


/** student routes loading */
const studentRoutes = require("./routes/student.routes")
studentRoutes(app)

/** teacher routes loading */
const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app)

app.listen(port, () => {
    console.log("Server is running..")
})