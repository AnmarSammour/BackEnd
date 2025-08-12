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

    // Step 3: find where age = 27
    console.log("Step 3: Finding all documents where age = 27");
    const age27Docs = await collection.find({ age: 27 }).toArray();
    console.log("Users with age 27:");
    console.log(age27Docs);
    console.log("");
    console.log("--------------------------------------------------");

    // Step 4: limit to first 3
    console.log("Step 4: First 3 documents where age = 27");
    const first3 = await collection.find({ age: 27 }).limit(3).toArray();
    console.log("First 3 users:");
    console.log(first3);
    console.log("");
    console.log("--------------------------------------------------");
    
    // Step 5: $set update name
    console.log("Step 5: Update name of first 4 age-27 docs using $set");
    const docsToUpdate = await collection.find({ age: 27 }).limit(4).toArray();
    const ids = docsToUpdate.map((doc) => doc._id);

    const result = await collection.updateMany(
      { _id: { $in: ids } },
      { $set: { name: "Youssef" } }
    );
    console.log(`${result.modifiedCount} documents had name updated.\n`);
    console.log("--------------------------------------------------");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

run();
