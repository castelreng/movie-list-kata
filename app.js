const express = require('express');
const app = express();
var cors = require('cors')
const firebase = require("firebase/app");
require("firebase/firestore");

let firebaseConfig = require('./config/firebase_config.json');

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

app.use(cors())
app.use(express.json());


app.get('/getMovies', function (req, res) {
    db.collection('movies').orderBy('title').get()
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


app.delete('/deleteMovie/:id', function (req, res) {
    db.collection('movies').doc(req.params.id).delete()
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

