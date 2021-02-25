import { Request, Response, Router } from 'express';
import { UserController } from '../controller/userController';
import { SurveysController } from '../controller/surveysController';
import { SurveyUsersController } from '../controller/surveyUsersController';

const routes = Router();
const userController = new UserController();
const surveysController = new SurveysController();
const surveyUsersController = new SurveyUsersController();

routes.get('/users', (resquest: Request, response: Response) => {
    return response.json({msg:'olá'});
})

routes.post('/users', userController.create);
routes.post('/survey', surveysController.create);
routes.get('/survey', surveysController.show);

routes.post('/sendMail', surveyUsersController.execute);


export default routes;