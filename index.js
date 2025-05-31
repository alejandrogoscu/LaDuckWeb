const express = require("express");
const app = express();

// <------ MIDDLEWARE ------>
app.use(express.json());

// <------ ENDPOINTS ------>
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));
app.use("/users", require("./routes/users"));

// <------ SERVER ------>
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
