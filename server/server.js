const app = require("./app");
require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(colors.blue(`APP IS LISTENING on PORT ${PORT}`));
});
