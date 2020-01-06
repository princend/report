"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
});
const db = firebase.firestore();
exports.ref = db.collection('user');
class DataBase {
    get(params) {
        exports.ref.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id, doc.data());
            });
        });
        // ref.doc(params.id).get().then(querySnapshot => {
        //     console.log(querySnapshot.data(),'getparambyId')
        // });
    }
    post() {
        //todo
    }
    put() {
        //todo
    }
    delete() {
        //todo
    }
}
exports.DataBase = DataBase;
