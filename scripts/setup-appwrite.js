const { Client, Databases, ID } = require('node-appwrite');

/**
 * Appwrite Setup Script
 * 
 * This script automates the creation of the database and collections for Impact Migration.
 * 
 * Prerequisite:
 * 1. Your Appwrite Endpoint & Project ID
 * 2. An Appwrite API Key with Database permissions
 */

// Replace these with your actual values or use environment variables
const ENDPOINT = process.env.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const API_KEY = process.env.APPWRITE_API_KEY;

if (!PROJECT_ID || !API_KEY) {
  console.error('Error: Please set APPWRITE_PROJECT_ID and APPWRITE_API_KEY environment variables.');
  process.exit(1);
}

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

const databases = new Databases(client);

async function setup() {
    try {
        console.log('--- Starting Appwrite Setup ---');

        // 1. Create Database
        const databaseName = 'Impact Migration DB';
        const dbId = ID.unique();
        const db = await databases.create(dbId, databaseName);
        console.log(`✅ Database created: ${db.$id}`);

        // 2. Create Applications Collection
        const appsColl = await databases.createCollection(
            db.$id,
            ID.unique(),
            'Applications'
        );
        console.log(`✅ Applications Collection created: ${appsColl.$id}`);

        // Add Attributes to Applications
        await databases.createStringAttribute(db.$id, appsColl.$id, 'fullName', 255, true);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'email', 255, true);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'phone', 20, true);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'preferredCountry', 100, true);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'courseOfInterest', 255, true);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'educationLevel', 100, true);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'message', 2000, false);
        await databases.createStringAttribute(db.$id, appsColl.$id, 'createdAt', 100, true);
        console.log('   - Applications attributes defined.');

        // 3. Create Messages Collection
        const msgColl = await databases.createCollection(
            db.$id,
            ID.unique(),
            'Messages'
        );
        console.log(`✅ Messages Collection created: ${msgColl.$id}`);

        // Add Attributes to Messages
        await databases.createStringAttribute(db.$id, msgColl.$id, 'fullName', 255, true);
        await databases.createStringAttribute(db.$id, msgColl.$id, 'email', 255, true);
        await databases.createStringAttribute(db.$id, msgColl.$id, 'subject', 255, true);
        await databases.createStringAttribute(db.$id, msgColl.$id, 'message', 2000, true);
        await databases.createStringAttribute(db.$id, msgColl.$id, 'createdAt', 100, true);
        console.log('   - Messages attributes defined.');

        console.log('\n--- Setup Complete ---');
        console.log('Please copy these IDs to your .env file:');
        console.log(`VITE_APPWRITE_DATABASE_ID="${db.$id}"`);
        console.log(`VITE_APPWRITE_APPLICATIONS_COLLECTION_ID="${appsColl.$id}"`);
        console.log(`VITE_APPWRITE_MESSAGES_COLLECTION_ID="${msgColl.$id}"`);

    } catch (error) {
        console.error('❌ Error during setup:', error.message);
    }
}

setup();
