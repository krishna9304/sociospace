import { Server } from "../constants";
import { Client, Users, Storage, Account, Databases } from "node-appwrite";

// Init SDK
const client = new Client();

client
  .setEndpoint(Server.endpoint)
  .setProject(Server.project)
  .setKey(Server.apikey);

const users = new Users(client);
const storage = new Storage(client);
const account = new Account(client);
const databases = new Databases(client);

export const appwrite = { client, users, storage, account, databases };
