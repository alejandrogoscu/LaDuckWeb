const express = require("express");
const { typeError } = require("./middlewares/errors");
const app = express();

// <------ MIDDLEWARE ------>
app.use(express.json());

// <------ ENDPOINTS ------>
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));
app.use("/reviews", require("./routes/reviews"));
app.use('/uploads', express.static('./assets/uploads'));

app.use(typeError);

// <------ SERVER ------>
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
