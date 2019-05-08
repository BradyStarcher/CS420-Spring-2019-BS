'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();
var notes = require('../models/notes-memory');

// Add Note. (create)
router.get('/add', (req, res, next) => {
    res.render('noteedit', {
        title: "New Transaction",
        docreate: true,
        notekey: "",
        note: undefined
    });
});

// Save Note (update)
router.post('/save', (req, res, next) => {
    var p;
    if (req.body.docreate === "create") {
        p = notes.create(req.body.notekey,
                req.body.title, req.body.body);
    } else {
        p = notes.update(req.body.notekey,
                req.body.title, req.body.body);
    }
    p.then(note => {
        res.redirect('/notes/view?key='+ req.body.notekey);
    })
    .catch(err => { next(err); });
});

// Read Note (read)
router.get('/view', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('noteview', {
            title: note ? note.title : "",
            notekey: req.query.key,
            note: note
        });
    })
    .catch(err => { next(err); });
});

// Edit note (update)
router.get('/edit', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('noteedit', {
            title: note ? ("Edit " + note.title) : "Start a new Transaction",
            docreate: false,
            notekey: req.query.key,
            note: note
        });
    })
    .catch(err => { next(err); });
});

// Ask to Delete note (destroy)
router.get('/destroy', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('notedestroy', {
            title: note ? note.title : "",
            notekey: req.query.key,
            note: note
        });
    })
    .catch(err => { next(err); });
});

// Really destroy note (destroy)
router.post('/destroy/confirm', (req, res, next) => {
    notes.destroy(req.body.notekey)
    .then(() => { res.redirect('/'); })
    .catch(err => { next(err); });
});

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

router.get('/destroyCustomer', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('customerDestroy', {
            title: note ? note.title : "",
            notekey: req.query.key,
            note: note
        });
    })
    .catch(err => { next(err); });
});

router.post('/destroyCustomer/confirm', (req, res, next) => {
    notes.destroy(req.body.notekey)
    .then(() => { res.redirect('/'); })
    .catch(err => { next(err); });
});


module.exports = router;