const mongoose = require('mongoose');

async function connectMongodb(url){
    // Connection
    return mongoose.connect(url);
}
  module.exports={
    connectMongodb,
  };