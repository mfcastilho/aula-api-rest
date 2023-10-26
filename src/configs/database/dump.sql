create database db_aula3_api_rest;

create table clients(
	id serial primary key,
  name varchar(100) not null,
  email varchar(100) not null unique,
  cpf char(11) not null unique,
  age integer not null
);
