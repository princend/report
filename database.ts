
const firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
})

const db = firebase.firestore();
export const ref = db.collection('user');


export class DataBase {

    get(params) {

        ref.get().then(querySnapshot => {
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

