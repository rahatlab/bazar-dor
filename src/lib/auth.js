import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
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
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  socialProviders,
});
