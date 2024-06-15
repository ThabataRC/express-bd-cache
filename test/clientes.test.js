const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

describe('Endpoint /clientes', () => {
    let token;

    beforeAll(() => {
        // Gerando um token válido para os testes
        token = jwt.sign({ id: 1 }, '1234', { expiresIn: '1h' });
    });

    test('GET /clientes sem token retorna 401', async () => {
        const response = await request(app).get('/clientes');
        expect(response.status).toBe(401);
    });

    test('GET /clientes com token retorna 200', async () => {
        const response = await request(app)
            .get('/clientes')
            .set('x-access-token', token);
        expect(response.status).toBe(200);
    });
});
