const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const { DB_URL } = process.env;
console.log(process.env.DB_URL)
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('connected to mongodb...');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

mongoose.createConnection(DB_URL);
