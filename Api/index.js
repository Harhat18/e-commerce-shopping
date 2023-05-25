const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("../Api/routes/user");
const authRoute = require("../Api/routes/auth");
const productRoute = require("../Api/routes/product");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB bağlandı"))
  .catch((err) => console.log(err));

// app.get("/api/test", () => {
//   console.log("test başarılı");
// });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log("server çalıştı");
});
