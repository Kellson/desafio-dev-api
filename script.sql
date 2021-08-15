
create database testes;
use testes;
create table Operacao(
	id int primary key auto_increment,
    tipo int,
    data varchar(8),
    valor decimal(13,2),
    cpf varchar(11),
    cartao varchar(12),
    hora varchar(6),
    donoLoja varchar(14),
    nomeLoja varchar(18)
);
