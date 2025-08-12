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

    // Step 2: insertMany
    console.log("Step 2: Adding 10 documents with insertMany");
    await collection.insertMany([
      { name: "Aref", age: 27 },
      { name: "Mohammad", age: 27 },
      { name: "Sam", age: 27 },
      { name: "Tallinn", age: 27 },
      { name: "Islam", age: 27 },
      { name: "Khalid", age: 35 },
      { name: "Omar", age: 40 },
      { name: "Layan", age: 31 },
      { name: "Tasneem", age: 31 },
      { name: "Saad", age: 45 },
    ]);
    console.log("10 documents added. (5 with age 27)\n");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

run();
