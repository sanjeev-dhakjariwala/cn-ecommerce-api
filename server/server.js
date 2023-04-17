const app = require("./app");
require("dotenv").config();
//using colors npm module to add colors to console
const colors = require("colors");

//taking PORT number from env file or 4000 by default
const PORT = process.env.PORT || 4000;

//App is listening on port that is present in the env file or 4000 by default
app.listen(PORT, () => {
  console.log(colors.blue(`APP IS LISTENING on PORT ${PORT}`));
});
