const express = require('express')
const app = express()
const admin = require('firebase-admin');

let serviceAccount = require('./config/test-firebase-4521b-369c140244a5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

