import { Request, Response } from "express";
import { UserModel } from "../model/user.model";

class UserController {

    //取得商品
    getMerchandise(req: Request, res: Response) {
        let param = req.query
        let userModel = new UserModel();
        let result = userModel.getMerchandise(param)
        result.then(result => res.send(result))
    }


    //新建帳號
    createAccount(req: Request, res: Response) {
        let param = req.query;
        let userModel = new UserModel();
        let result = userModel.createAccount(param);
        result.then(result => res.send(result))
    }
}


export default UserController;