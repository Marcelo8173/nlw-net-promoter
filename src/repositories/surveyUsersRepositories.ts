import { Repository } from "typeorm";
import { SurveyUsers } from "../entities/surveyUsers";

class SurveyUsersRepositories extends Repository<SurveyUsers>{}

export { SurveyUsersRepositories };