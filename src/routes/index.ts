import { Request, Response, Router } from 'express';
import {UserController} from '../controller/userController';

const routes = Router();
const userController = new UserController();

routes.get('/users', (resquest: Request, response: Response) => {
    return response.json({msg:'olá'});
})

routes.post('/users', userController.create);

export default routes;