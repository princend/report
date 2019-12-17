"use strict";
exports.__esModule = true;
var firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
});
var db = firebase.firestore();
exports.ref = db.collection('user');
var DataBase = /** @class */ (function () {
    function DataBase() {
    }
    DataBase.prototype.get = function (params) {
        exports.ref.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, doc.data());
            });
        });
        // ref.doc(params.id).get().then(querySnapshot => {
        //     console.log(querySnapshot.data(),'getparambyId')
        // });
    };
    DataBase.prototype.post = function () {
        //todo
    };
    DataBase.prototype.put = function () {
        //todo
    };
    DataBase.prototype["delete"] = function () {
        //todo
    };
    return DataBase;
}());
exports.DataBase = DataBase;
