

create table logins(
    id serial unique NOT NULL,
    email varchar(50) NOT NULL,
    hash varchar(100) NOT NULL
)

