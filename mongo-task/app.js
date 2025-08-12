const { MongoClient } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

async function run() {
  const client = new MongoClient(connectionUrl);

  try {
    await client.connect();
    console.log("Connected to MongoDB\n");

    const db = client.db(dbName);
    const collection = db.collection("users");

    await collection.deleteMany({});
    console.log("Collection cleared.\n");

    // Step 1: insertOne
    console.log("Step 1: Adding 2 documents with insertOne");
    await collection.insertOne({ name: "Anmar", age: 24 });
    await collection.insertOne({ name: "Amy", age: 25 });
    console.log("2 documents added.\n");
    console.log("--------------------------------------------------");

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

run();