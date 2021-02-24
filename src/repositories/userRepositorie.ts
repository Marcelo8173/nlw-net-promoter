import {User} from '../entities/users';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(User)
class userRepositorie extends Repository<User>{
    
}

export { userRepositorie };