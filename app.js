const express = require('express')
const app = express()
const admin = require('firebase-admin');

let serviceAccount = require('./config/test-firebase-4521b-369c140244a5.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

app.use(express.json());


app.get('/getMovies', function (req, res) {
    db.collection('movies').get()
        .then((snapshot) => {
            let movies = [];
            snapshot.forEach((doc) => {
                movies.push({ id: doc.id, ...doc.data() });
            });
            res.json(movies);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Error getting documents', error: err });
        });
});


app.get('/getMovie/:id', function (req, res) {
    db.collection('movies').doc(req.params.id).get()
        .then(doc => {
            if (!doc.exists) {
                res.status(404).json({ message: 'No such document!' });
            } else {
                res.json({ id: doc.id, ...doc.data() });
            }
        })
        .catch(err => {
            res.status(400).json({ message: 'Error getting document', error: err });
        });
});

app.post('/addMovie', function (req, res) {
    db.collection('movies').add(req.body)
        .then(doc => {
            res.status(201).json({ id: doc.id, ...req.body });
        })
        .catch(err => {
            res.status(400).json({ message: 'Error adding document', error: err });
        });
});

app.post('/editMovie', function (req, res) {
    db.collection('movies').doc(req.body.id).update({ ...req.body })
        .then(() => {
            res.status(200).json({ ...req.body });
        })
        .catch(err => {
            res.status(400).json({ message: 'Error editing document', error: err });
        });
});


app.post('/deleteMovie', function (req, res) {
    db.collection('movies').doc(req.body.id).delete()
        .then(() => {
            res.status(200).json({ message: 'OK' });
        })
        .catch(err => {
            res.status(400).json({ message: 'Error deleting document', error: err });
        });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

