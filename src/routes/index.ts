import { Request, Response, Router } from 'express';
import { UserController } from '../controller/userController';
import { SurveysController } from '../controller/surveysController';

const routes = Router();
const userController = new UserController();
const surveysController = new SurveysController();

routes.get('/users', (resquest: Request, response: Response) => {
    return response.json({msg:'olá'});
})

routes.post('/users', userController.create);
routes.post('/survey', surveysController.create);

export default routes;