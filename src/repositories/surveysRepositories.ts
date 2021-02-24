import {surveys} from '../entities/surveys';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(surveys)
class SurveysRepositorie extends Repository<surveys>{
    
}

export { SurveysRepositorie };