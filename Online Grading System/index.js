const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// static folder
app.use(express.static(path.join(__dirname, "static")));
// views template engine
app.set("view engine", "ejs");

// routes variables
const homeRoute = require("./routes/home");
const loginRoute = require("./routes/login");
const adminLoginRoute = require("./routes/adminLogin");
const adminRoute = require("./routes/admin");
const archiveRoute = require("./routes/archive");
const teachersRoute = require("./routes/teachers");
const gradesEditorRoute = require("./routes/gradesEditor");
const studentsRoute = require("./routes/students");
// routes
app.use("/", homeRoute);
app.use("/login", loginRoute);
app.use("/admin_login", adminLoginRoute);
app.use("/admin", adminRoute);
app.use("/archive", archiveRoute);
app.use("/teachers", teachersRoute);
app.use("/grades_editor", gradesEditorRoute);
app.use("/students", studentsRoute);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
