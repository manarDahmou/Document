//import express module
const express = require('express')
//create express application
const app = express();
// import body parser module
const bodyParser = require("body-parser");
//importe le bcrypt 
const bcrypt = require("bcrypt");



// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Prepare Response to JSON Object to send to FE

app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

//importer le model match
const Document = require('./models/document')

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/document');

//Business Logique :Get all Document
app.get('/documents', (req, res) => {
    console.log("here into get all Documents");
    Document.find((err, docs) => {
        if (err) {
            console.log('Error with DB');
        } else {
            res.status(200).json({
                documentRes: docs
            })
        }
    });
})
//Business Logique :Get  Document by ID
app.get('/documents/:id', (req, res) => {
    console.log('here into get documents by ID', req.params.id);
    Document.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Result after get by ID', result);
            if (result) {
                res.status(200).json({
                    finded: result

                })
            }
        }
    )
})
//Business Logique :delete  Document by ID
app.delete('/documents/:id', (req, res) => {
    console.log('here into delete teams by ID');
    Document.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Result after delete', result);
            if (result) {
                res.status(200).json({
                    message: 'Deleted with success'
                })
            }
        }
    )
})
//Business Logique :EDIT   Document by id
app.put('/documents/:id', (req, res) => {
    console.log('here into edit  Document ');
    Document.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            console.log('Result after update', result);
            if (result) {
                res.status(200).json({
                    message: 'updated with success'
                });
            }
        }
    )
})
//Business Logique :add   Document 
app.post('/documents', (req, res) => {
    console.log('here into add  document ', req.body);
    const document = new Document({
        fullName: req.body.fullName,
        description: req.body.description,
        date: req.body.date,
        doc: req.body.doc
    });
    document.save((err, result) => {
        console.log('Error', err);
        console.log('Result', result);
        if (result) {
            res.status(200).json({
                message: 'Added with success'
            });

        }
    });
})
module.exports = app;
