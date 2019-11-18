import { Request, Response } from "express";

class UserController {
    //取得商品
    getMerchandise(req: Request, res: Response) {
        let param = req.query
        if (param.id === '1') {
            res.send('商品一')
        }
        else if (param.id === '2') {
            res.send('商品二')
        }
        else {
            res.send(`商品${param.id}`)
        }
    }
}


export default UserController;