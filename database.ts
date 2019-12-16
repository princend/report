
const firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
})

const db = firebase.firestore();
export const ref = db.collection('test');

