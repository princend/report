"use strict";
exports.__esModule = true;
var firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
});
var db = firebase.firestore();
exports.ref = db.collection('test');
