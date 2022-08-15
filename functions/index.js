const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const YOUR_API_KEY = "";
const YOUR_ACCOUNT_ID = "";

// const client = require("drip-nodejs")({ token: YOUR_API_KEY, accountId: YOUR_ACCOUNT_ID });

exports.shareEmail = functions.firestore.document("/users/{id}")
    .onCreate((snapshot, context) => {
        const errors = admin.firestore().collection("errors");
        if (snapshot.email) {
            client.createUpdateSubscriber({email: snapshot.email, id: context.params.id})
        } else {
            return errors.add({message: "document doesn't have email"});
        }
        return null;
    });