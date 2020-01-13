import { Request, Response } from "express";
import { settingModel } from "../model/setting.model";


export class SettingController {

    /**
     * 取得所有項目設定
     * @param req 
     * @param res 
     */
    getItemSetting(req: Request, res: Response) {
        let result = settingModel.getItemSetting(req)
        result.then(result => res.send(result))
    }

    /**
     * 儲存所有項目設定
     * @param req 
     * @param res 
     */
    setItemSetting(req: Request, res: Response) {
        let result = settingModel.setItemSetting(req);
        result.then(result => res.send(result))
    }


    /**
     * 取得所有公司設定
     * @param req 
     * @param res 
     */
    getCompanySetting(req: Request, res: Response) {
        let result = settingModel.getCompanySetting(req)
        result.then(result => res.send(result))
    }

    /**
     * 儲存所有公司設定
     * @param req 
     * @param res 
     */
    setCompanySetting(req: Request, res: Response) {
        let result = settingModel.setCompanySetting(req)
        result.then(result => res.send(result))
    }

    /**
     * 取得公司的項目設定
     * @param req 
     * @param res 
     */
    getItemsByCompanySetting(req: Request, res: Response) {
        let result = settingModel.getItemsByCompanySetting(req)
        result.then(result => res.send(result))
    }

    /**
     * 儲存公司的項目設定
     * @param req 
     * @param res 
     */
    setItemsByCompanySetting(req: Request, res: Response) {
        let result = settingModel.setItemsByCompanySetting(req)
        result.then(result => res.send(result))
    }
}



export default SettingController;