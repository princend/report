import { dataBase } from "../database/database";

export class UserModel {
    public getMerchandise(param) {
        let asyncData = dataBase.get('dbconnect');
        return asyncData;
    }


    public createAccount(param) {
        let asyncData = dataBase.put();
        return asyncData;
    }
}

