const mongo = require("mongodb");
export const DB_NAME = process.env.MONGODB_DB
const mongoDbUrl = process.env.MONGODB_URI;
const mongoClient = mongo.MongoClient;

export const connectedDb = mongoClient.connect(mongoDbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser:true
});