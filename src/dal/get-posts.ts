import { POSTS_COLLECTION } from "./constants";
import { connectedDb, DB_NAME } from "./my-mongodb";

// --- todo nath , can do better
export async function getPosts(): Promise<any> {
    let db;
    try {
      db = await connectedDb;
      const dbObject = db.db(DB_NAME);
      const postsCollection = dbObject.collection(POSTS_COLLECTION);
      var query = {};
      const postsPromise = postsCollection.find(query).toArray();
      return postsPromise;
    } catch (err) {
      throw err;
    }
  }
  