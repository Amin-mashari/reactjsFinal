const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    const user = "Admin";
    const pass = "Admin21";
    const databaseName = "Test";

    await mongoose.connect(
      `mongodb+srv://${user}:${pass}@cluster0.sh0xa.mongodb.net/${databaseName}?
        retryWrites=true&w=majority`
    );
  } catch (err) {
    console.log(err, "Error in connection");
  }
};

connectMongo();

const place = mongoose.model("place", {
  title: {
    type: String
  }
});

module.exports = {
  place
};
