import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operacao', { schema: 'testes' })
export default class Operacao {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('int', { name: 'tipo' })
  tipo: number;

  @Column('varchar', { name: 'data' })
  data: string;

  @Column('decimal', { name: 'valor' })
  valor: number;

  @Column('varchar', { name: 'cpf' })
  cpf: string;

  @Column('varchar', { name: 'cartao' })
  cartao: string;

  @Column('varchar', { name: 'hora' })
  hora: string;

  @Column('varchar', { name: 'donoLoja' })
  donoLoja: string;

  @Column('varchar', { name: 'nomeLoja' })
  nomeLoja: string;
}
