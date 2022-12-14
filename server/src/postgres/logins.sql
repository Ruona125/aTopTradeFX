create table logins(
    id serial unique,
    email varchar(50),
    hash varchar(100)
)