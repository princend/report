import { dataBase } from "../database/database";
import { formatTool } from '../tool/format-tool';
import { db } from "../database/db-setting";

export class SettingModel {

    constructor() { }

    /**
     * 取得所有項目設定
     * @param req 
     */
    public getItemSetting(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    /**
     * 儲存所有項目設定
     * @param req 
     */
    public setItemSetting(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }

    /**
     * 取得所有公司設定
     * @param req 
     */
    public getCompanySetting(req) {
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    /**
     * 儲存所有公司設定
     * @param req 
     */
    public setCompanySetting(req) {
        // let dbRoute = formatTool.removeFirstSlash(req.url)
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }

    /**
     * 取得公司的項目設定
     * @param req 
     */
    public getItemsByCompanySetting(req) {
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.get({ reference: reference });
        return asyncData;
    }

    /**
     * 儲存公司的項目設定
     * @param req 
     */
    public setItemsByCompanySetting(req) {
        let dbRoute = 'setting'
        let reference = db.collection(dbRoute)
        let asyncData = dataBase.put({ reference: reference });
        return asyncData;
    }


}

export const settingModel = new SettingModel();