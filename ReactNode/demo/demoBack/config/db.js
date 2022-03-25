const mongoose = require('mongoose');
// const config = require('config');
const db = "mongodb+srv://<username>:<password>@cluster0.otmsg.mongodb.net/demo?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    console.error("Si ça ne marche pas, vérifiez que la ligne 3 contienne bien vos identifiants et mot de passe");
    process.exit(1);
  }
};

module.exports = connectDB;