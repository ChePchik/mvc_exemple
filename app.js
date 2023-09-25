const express = require("express");
const path = require("path");
const logger = require("morgan");
const routeIndex = require("./route/index");
const port = 3000;
// const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routeIndex);

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	// render the error page
	console.log("🚀 ~ file: app.js:23 ~ app.use ~ err:", err);
	res.status(err.status || 500);
	res.send(err);
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
