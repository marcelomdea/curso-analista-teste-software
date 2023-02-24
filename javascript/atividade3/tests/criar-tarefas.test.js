const request = require('supertest');
const app = require('../server');



describe('POST /tarefa', () => {
    test('deve criar uma nova tarefa', async () => {
        const novaTarefa = { nome: 'Estudar JEST', concluido: false };
        const resposta = await request(app)
            .post('/tarefa')
            .send(novaTarefa);

        expect(resposta.statusCode).toBe(200);
        expect(resposta.body).toMatchObject(novaTarefa);
    });
});
