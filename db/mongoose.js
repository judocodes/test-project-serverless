const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
} catch (e) {
  console.log(e);
}
