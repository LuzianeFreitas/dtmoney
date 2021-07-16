import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  // Banco de dados do mirage
  // Mirage Database
  models: {
    transaction: Model,
  },

  // Deixando dados pre cadastrados no banco
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amout: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amout: 1200,
          createdAt: new Date('2021-02-14 12:00:00'),
        }
      ]
    })
  },
  // Definindo rotas da aplicação
  // Defining Application Routes
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      // retorna todas as transações do banco
      // return all bank transactions
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      // schema é o banco de dados
      // schema is the database
      return schema.create('transaction', data);
  })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

