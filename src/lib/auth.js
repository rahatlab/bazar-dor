import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

// MongoClient connect kore na construction-e — first request-e connect hobe
const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://localhost:27017/bazardor"
);
const db = client.db();

// Social provider key na thakle init-e throw na — key dilei auto-enable
const socialProviders = {};
if (process.env.GOOGLE_CLIENT_ID) {
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
}
if (process.env.GITHUB_CLIENT_ID) {
  socialProviders.github = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  };
}

export const auth = betterAuth({
  // Atlas = replica set → client dile transactions on (official doc)
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  socialProviders,
  // /get-session etc. 2-3x fast (adapter ≥1.4.0)
  advanced: {
    database: {
      joins: true,
    },
  },
});
