create database login;

use login;
create table login(
	email varchar(11),
    senha varchar(5),
    primary key(email)
);

insert into login values ('maria@admin.com', '12345');