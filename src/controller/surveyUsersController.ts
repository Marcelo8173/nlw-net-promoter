import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/users';
import { surveys } from '../entities/surveys';
import { SurveyUsers } from '../entities/surveyUsers';

class SurveyUsersController{
    async execute(request: Request, response: Response): Promise<Response>{
        const { email, survey_id } = request.body;

        const usersRepositories = getRepository(User);
        const surveyRepositories = getRepository(surveys)
        const surverUserRespositories = getRepository(SurveyUsers);

        const userExist = await usersRepositories.query(`
            select * from users where email = '${email}' 
        `)
        console.log(userExist[0].id);

        if (userExist.length === 0) {
            return response.status(400).json({ msg: 'user not exist' });
        };

        const survyId = await surveyRepositories.findOne({ id: survey_id });
        
        if (!survyId) {
            return response.status(400).json({ msg: 'survey not exist' });
        }

        const surveyUser = surverUserRespositories.create({
            user_id: `'${userExist[0].id}'`,
            survey_id,
            value: 1
        })

        await surverUserRespositories.save(surveyUser);
        
        return response.json(surveyUser);
    }
}

export { SurveyUsersController };