const app = require("./app");
require("dotenv").config();
//using colors npm module to add colors to console
const colors = require("colors");
const productRoutes = require("../routes/products.routes");
const { errorHandler, notFound } = require("../middleware/errorMiddleware");
//taking PORT number from env file or 4000 by default
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`API RUNNING SUCCESSFULLY`);
});

app.use("/products",productRoutes);

app.use(notFound);
app.use(errorHandler);
//App is listening on port that is present in the env file or 4000 by default
app.listen(PORT, () => {
  console.log(colors.blue(`APP IS LISTENING on PORT ${PORT}`));
});
