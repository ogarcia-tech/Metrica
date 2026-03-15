import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  initializeFirestore, 
  doc, 
  getDocFromServer,
  terminate
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services with specific settings for better connectivity
// We use the specific database ID provided in the config
export const db = initializeFirestore(app, {
  // Use long polling if WebSockets are problematic in the iframe environment
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId);

export const auth = getAuth(app);

// Connection test
async function testConnection() {
  try {
    // Attempt to fetch a non-existent doc to verify connection
    await getDocFromServer(doc(db, '_connection_test_', 'init'));
    console.log('Firebase: Connection established successfully.');
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Firebase: Configuration error or client is offline.');
    } else {
      console.warn('Firebase connection test warning:', error);
    }
  }
}

testConnection();

export default app;
