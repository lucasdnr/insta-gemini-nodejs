import { MongoClient } from 'mongodb';

/**
 * Connects to a MongoDB database using the provided connection string.
 *
 * @param {string} connectionString - The connection string to the MongoDB database.
 * @returns {Promise<MongoClient>} A promise that resolves with the MongoClient object.
 */
export default async function connectToDatabase(connectionString) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectionString);
    console.log('Connecting to database cluster...');
    await mongoClient.connect();
    console.log('Connected to MongoDB Atlas successfully!');

    return mongoClient;
  } catch (error) {
    console.error('Failed to connect to database!', error);
    process.exit();
  }
}