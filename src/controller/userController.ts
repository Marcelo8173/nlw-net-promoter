import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { userRepositorie } from '../repositories/userRepositorie';


class UserController{
    async create(request: Request, response: Response): Promise<Response>{
        const {name,email} = request.body;
        const userRepository = getCustomRepository(userRepositorie);

        const alredyEsxist = await userRepository.query(`
        select * from users where email = '${email}' 
        `);

        if (alredyEsxist.length !== 0) {
            return response.status(400).json({
                error: 'user alredy exist'
            });
        };
        
        const user = userRepository.create({
            name,
            email
        })

        await userRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };