import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {User} from '../entities/users';

class UserController{
    async create(request: Request, response: Response): Promise<Response>{
        const {name,email} = request.body;
        const userRepository = getRepository(User);

        const alredyEsxist = await userRepository.findOne({
            where: email
        })

        if (alredyEsxist) {
            return response.status(400).json({
                error: 'user alredy exist'
            });
        };
        
        const user = userRepository.create({
            name,
            email
        })

        await userRepository.save(user);

        return response.json(user);
    }
}

export { UserController };