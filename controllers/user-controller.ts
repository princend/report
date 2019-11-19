import { Request, Response } from "express";
import { UserModel } from "../model/user.model";

class UserController {

    //取得商品
    getMerchandise(req: Request, res: Response) {
        let param = req.query
        let userModel = new UserModel();
        let result = userModel.getMerchandise(param)
        res.send(result)
    }
}


export default UserController;