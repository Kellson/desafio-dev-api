import { Connection } from 'typeorm';
import { Operacao } from '../../db/models';

export default class GetOperacoes {
  public async get(connection: Connection): Promise<Operacao[]> {
    const OperacaoRepository = connection.getRepository(Operacao);
    const lista = (await OperacaoRepository.createQueryBuilder().select().getMany()) as Operacao[];
    return lista;
  }
}
