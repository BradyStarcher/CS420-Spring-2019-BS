'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();
var notes = require('../models/customer-memory');

router.get('/customerAdd', (req, res, next) => {
    res.render('customerCreation', {
        title: "Account Info",
        docreate: true,
        notekey: "",
        note: ""
    });
});

router.post('/saveCustomer', (req, res, next) => {
    var p;
    if (req.body.docreate === "create") {
        p = notes.create(req.body.notekey,
                req.body.title, req.body.body);
    } else {
        p = notes.update(req.body.notekey,
                req.body.title, req.body.body);
    }
    p.then(note => {
        res.redirect('/notes/viewCustomer?key='+ req.body.notekey);
    })
    .catch(err => { next(err); });
});

router.get('/viewCustomer', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('customerView', {
            title: note ? note.title : "",
            notekey: req.query.key,
            note: note
        });
    })
    .catch(err => { next(err); });
});

router.get('/editCustomer', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('customerEdit', {
            title: note ? ("Edit " + note.title) : "Edit Customer",
            docreate: false,
            notekey: req.query.key,
            note: note
        });
    })
    .catch(err => { next(err); });
});

module.exports = router;