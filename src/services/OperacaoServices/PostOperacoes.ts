import { Connection } from 'typeorm';
import { Operacao } from '../../db/models';

export default class PostOperacoes {
  public async post(connection: Connection, operacoes: Operacao[]): Promise<Operacao[]> {
    const OperacaoRepository = connection.getRepository(Operacao);
    const listaOp: Operacao[] = [];
    operacoes.forEach(x => {
      const entity = OperacaoRepository.create();
      entity.tipo = x.tipo;
      entity.data = x.data;
      entity.valor = x.valor;
      entity.cpf = x.cpf;
      entity.cartao = x.cartao;
      entity.hora = x.hora;
      entity.donoLoja = x.donoLoja;
      entity.nomeLoja = x.nomeLoja;
      listaOp.push(entity);
    });
    await OperacaoRepository.save(listaOp);
    const lista = (await OperacaoRepository.createQueryBuilder().select().getMany()) as Operacao[];
    return lista;
  }
}
