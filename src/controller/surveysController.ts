import { getCustomRepository } from "typeorm";
import { Request, Response } from 'express';
import {SurveysRepositorie } from '../repositories/surveysRepositories';


class SurveysController{
    async create(request: Request, response: Response): Promise<Response>{
        const {title,description} = request.body;

        const surveysRepositorie = getCustomRepository(SurveysRepositorie);
        const survey = surveysRepositorie.create({
            title,
            description
        });

        const surveyCreated = await surveysRepositorie.save(survey);

        return response.status(200).json(surveyCreated);
    }

    async show(request: Request, response: Response): Promise<Response>{
        const surveysRepositorie = getCustomRepository(SurveysRepositorie);
        const all = await surveysRepositorie.query(`SELECT * FROM surveys;`);

        return response.json(all);
    }
}

export { SurveysController };