import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { userRepositorie } from '../repositories/userRepositorie';


class UserController{
    async create(request: Request, response: Response): Promise<Response>{
        const {name,email} = request.body;
        const userRepository = getCustomRepository(userRepositorie);

        const alredyEsxist = await userRepository.query(`
            SELECT * FROM users where email = '${email}' 
        `);

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