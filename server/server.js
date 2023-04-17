const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`APP IS LISTENING on PORT ${PORT}`);
});
