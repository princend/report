
const firebase = require('firebase');
firebase.initializeApp({
    projectId: 'report-3012b'
})

const db = firebase.firestore();
export const ref = db.collection('user');


export class DataBase {

    get(params) {
        return ref.get().then(querySnapshot => {
            let result: Array<any> = [];
            querySnapshot.forEach(doc => {
                result.push(doc.data())
            });
            return result;
        });
    }

    post() {
        //todo


    }

    put() {
        //todo

        return ref.doc().set({ acount: 'user11', password: 'a123456' }).then((res) => {
            console.log(res)
            return res
            console.log('put test');

        })
    }

    delete() {
        //todo

    }

}



export const dataBase = new DataBase();