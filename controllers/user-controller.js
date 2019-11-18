"use strict";
exports.__esModule = true;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    //取得商品
    UserController.prototype.getMerchandise = function (req, res) {
        // console.log(req,'參數')
        // let param = JSON.parse(req.query)
        var param = req.query;
        console.log(req.query.id, 'cc~~~', typeof (req.query.id));
        if (param.id === '1') {
            res.send('商品一');
        }
        else if (param.id === '2') {
            res.send('商品二');
        }
        else {
            res.send("\u5546\u54C1" + param.id);
        }
    };
    return UserController;
}());
exports["default"] = UserController;
