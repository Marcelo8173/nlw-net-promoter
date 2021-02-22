import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/users', (resquest: Request, response: Response) => {
    return response.json({msg:'olá'});
})

routes.post('')

export default routes;