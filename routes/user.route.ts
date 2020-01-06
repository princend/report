import Route from "./route";
import UserController from "../controllers/user-controller";

class UserRoute extends Route {
    private userController = new UserController();

    constructor() {
        super();
        this.prefix = '';
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/user', this.userController.getMerchandise);
        this.router.put('/createAccount',this.userController.createAccount)
    }

}
export default UserRoute;