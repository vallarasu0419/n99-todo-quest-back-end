// Entry Point of the API Server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./App/Configuration/config");

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

process.on("SIGINT", () => {
  connection.end();
  process.exit();
});
require("./App/Routes/Routes")(app);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const Routes = require("./App/Routes/Routes");
// const cors = require("cors");
// const app = express();
// const port = 5000;

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });

// app.use(
//   cors({
//     origin: "*",
//   })
// );
// const log = (req, res, next) => {
//   const { originalUrl, method, query, body } = req;
//   console.log(
//     `Url: ${
//       originalUrl.split("?")[0]
//     } -> Method: ${method} -> Query: ${JSON.stringify(
//       query
//     )} || Body: ${JSON.stringify(body)} `
//   );
//   next();
// };

// app.use(bodyParser.json());
// app.use("/airbuzz", log, Routes);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.listen(port, () => {
//   console.log("Server is running on port", port);
// });
