import { dataBase } from "../database/database";
import { formatTool } from '../tool/format-tool';
import { db } from "../database/db-setting";

export class SettingModel {

    constructor() { }

    public getItemSetting(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    public setItemSetting(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'user'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }


    public getCompanySetting(req) {
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    public setCompanySetting(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'user'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }


    public getItemsByCompanySetting(req) {
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    public setItemsByCompanySetting(req) {
        let dbRoute = 'user'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }


}

export const settingModel = new SettingModel();