import { Router, Request, Response } from 'express';
import { Connection } from 'typeorm';
import { connectDatabase } from '../db';
import { Operacao } from '../db/models';
import { GetOperacoes, PostOperacoes } from '../services';
import validarOperacoes from '../utils/validarOperacoes';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  let connection: Connection;
  const body = req.body;
  try {
    connection = await connectDatabase();
    let operacoes: Operacao[];
    if (body && body.operacoes) {
      //Validar array de operações, verificando inclusive se é array
      const operacoesValidadas = validarOperacoes(body.operacoes);
      if (!operacoesValidadas)
        return res.status(400).json({
          err: true,
          msg: 'Dados inválidos',
        });
      const listaOperacao: Operacao[] = body.operacoes;
      operacoes = await new PostOperacoes().post(connection, listaOperacao);
    } else {
      operacoes = await new GetOperacoes().get(connection);
    }
    res.json({
      err: false,
      msg: 'Sucesso',
      insert: !!body.operacoes,
      data: operacoes,
    });
  } catch (err) {
    console.log('ERROR: ', err);
    res.status(500).json({
      err: true,
      msg: 'Ocorreu um erro inesperado',
    });
  }
});

export const OperacaoController: Router = router;
