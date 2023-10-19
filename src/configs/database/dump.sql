create database db_aula_api_rest;

create table clients(
	id serial primary key,
  name varchar(100) not null,
  email varchar(100) not null,
  cpf char(11) not null,
  age integer not null
);