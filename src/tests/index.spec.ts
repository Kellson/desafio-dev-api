import index from '../index';
import * as chai from 'chai';
import * as subSet from 'chai-subset';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
chai.use(subSet);

const schemaGet = {
  err: false,
  msg: 'Sucesso',
  insert: false,
  operacoes: [],
};

const schemaPost = {
  err: false,
  msg: 'Sucesso',
  insert: true,
  operacoes: [],
};

describe('GET OPERAÇÃO', () => {
  it('Deve retornar array de operações e insert false', () => {
    return chai
      .request(index)
      .post('/operacao')
      .then(res => {
        chai.expect(JSON.parse(res.text)).to.containSubset(schemaGet);
      });
  });
});

describe('POST OPERAÇÃO', () => {
  it('Deve retornar array de operações e insert true', () => {
    return chai
      .request(index)
      .post('/operacao')
      .set('content-type', 'application/json')
      .send({
        operacoes: [
          {
            tipo: 3,
            data: '20190301',
            valor: '142.00',
            cpf: '09620676017',
            cartao: '4753****3153',
            hora: '153453',
            donoLoja: 'JOÃO MACEDO   ',
            nomeLoja: 'BAR DO JOÃO       ',
          },
        ],
      })
      .then(res => {
        chai.expect(JSON.parse(res.text)).to.containSubset(schemaPost);
      });
  });
});
