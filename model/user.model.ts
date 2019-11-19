export class UserModel {
    public getMerchandise(param) {
        let result = ''
        if (+param.id <= 1000) {
            result = `商品${param.id}`
        }
        else {
            result = `查無商品`;
        }
        return result;
    }
}

