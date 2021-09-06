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


/** user routes loading */
const userRoutes = require("./routes/user.routes")
userRoutes(app)

/** token middleware */
const tkFn = require("./middleware/verifyToken")
app.use(tkFn)

/** student routes loading */
const studentRoutes = require("./routes/student.routes")
studentRoutes(app)

/** teacher routes loading */
const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app)

/** product routes loading */
const productRoutes = require("./routes/product.routes")
productRoutes(app)


/** course routes loading */
const courseRoutes = require("./routes/course.routes")
courseRoutes(app)

/** period routes loading */
const periodRoutes = require("./routes/period.routes")
periodRoutes(app)

app.listen(port, () => {
    console.log("Server is running..")
})