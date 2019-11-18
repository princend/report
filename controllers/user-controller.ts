import { Request, Response } from "express";
import UserModel from "../model/user.model";

class UserController {

    userModel = new UserModel();
    /**
     *
     */

    //取得商品
    getMerchandise(req: Request, res: Response) {
        let param = req.query

        if (+param.id <= 1000) {
            res.send(`商品${param.id}`)
        }
        else {
            res.send(`查無商品`)
        }
    }

}


export default UserController;