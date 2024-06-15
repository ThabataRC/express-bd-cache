const request = require('supertest');
const app = require('../app');

describe('Validation Middleware Tests', () => {
    jest.setTimeout(10000);

    test('Nome válido', async () => {
        const response = await request(app)
            .post('/clientes')
            .send({ nome: 'ValidName' });
        expect(response.status).not.toBe(400);
    });

    test('Sobrenome válido', async () => {
        const response = await request(app)
            .post('/clientes')
            .send({ sobrenome: 'ValidSurname' });
        expect(response.status).not.toBe(400);
    });

    test('Email válido', async () => {
        const response = await request(app)
            .post('/clientes')
            .send({ email: 'valid@example.com' });
        expect(response.status).not.toBe(400);
    });

    test('Idade válida', async () => {
        const response = await request(app)
            .post('/clientes')
            .send({ idade: 30 });
        expect(response.status).not.toBe(400);
    });

    test('Preço válido', async () => {
        const response = await request(app)
            .post('/produtos')
            .send({ 
                nome: 'Produto Valido',
                descricao: 'Descricao Valida',
                preco: 100,
                data_atualizado: '2022-06-15'
            });
        expect(response.status).not.toBe(400);
    });

    test('Data válida', async () => {
        const response = await request(app)
            .post('/produtos')
            .send({ 
                nome: 'Produto Valido',
                descricao: 'Descricao Valida',
                preco: 100,
                data_atualizado: '2022-06-15'
            });
        expect(response.status).not.toBe(400);
    });
});
