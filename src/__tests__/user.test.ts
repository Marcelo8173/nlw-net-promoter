import {app} from '../app';
import request from 'supertest';
import createConnection from '../database/typeorm';

describe("Users", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    it("should be able to create a new user", async () => {
        const response = await request(app).post('users')
            .send({
                email: 'user@example.com',
                name: 'jhon doe',
            });
        
        expect(response.status).toBe(201)
    });

})