create database aula_api_rest;

create table clientes(
	id serial primary key,
  nome varchar(100) not null,
  cpf char(11) not null,
  idade integer not null
);
