import { DbViewModel } from '../view-model/db-view-model';

export class DataBase {

    constructor() {
    }

    get(params: DbViewModel) {
        return params.reference.get().then(querySnapshot => {
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

    put(params: DbViewModel) {
        return params.reference.doc().set({ acount: 'user11', password: 'a123456' }).then((res) => {
            return res
        })
    }

    delete() {
    }

}

export const dataBase = new DataBase();