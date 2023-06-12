export const ISDEV = process.env.NODE_ENV === "development";
export const PORT = process.env.PORT || 8000;

export const Server = {
  endpoint: process.env.ENDPOINT || "",
  project: process.env.PROJECT || "",
  collectionID: process.env.COLLECTION_ID || "",
  databaseID: process.env.DATABASE_ID || "",
  apikey: process.env.APPWRITE_API_KEY || "",
};
