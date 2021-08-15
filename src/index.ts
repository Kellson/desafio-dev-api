require('dotenv').config();
import * as express from 'express';
import 'mysql2';
import * as cors from 'cors';
import { OperacaoController } from './controllers/operacao';

const app: express.Application = express();
app.use(express.json());
app.use(cors());
app.use('/operacao', OperacaoController);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
