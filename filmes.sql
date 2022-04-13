drop database filmes;
create database filmes;
use filmes;
create table conteudo(
	id int primary key auto_increment,
    conteudo int not null,
    nome varchar(255) not null,
    duracao TIME,
    temporadas int,
    ep_total int,
    ep_atual int,
    ultimo_visto DATETIME DEFAULT CURRENT_TIMESTAMP,
    ultimo_duracao TIME
);


insert into conteudo (conteudo, nome, duracao, temporadas, ep_total, ep_atual, ultimo_visto,ultimo_duracao)
values(1, "Diários de um Vampiro", 4500, 8, 171, 20, CURRENT_TIMESTAMP, 0000),
(0, "Guerra nas Estrelas", 20100, 1, 1, 1, CURRENT_TIMESTAMP, 500),
(2, "Attack on Titan - Shingeki no Kyojin", 2000, 4, 87, 15, CURRENT_TIMESTAMP, 1500);

