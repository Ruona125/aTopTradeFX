BEGIN TRANSACTION;

CREATE TABLE users(
   user_id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
   first_name VARCHAR(255) NOT NULL,
   last_name VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   phone_number varchar(50) NOT NULL,
   date_of_birth date NOT NULL,
   investment varchar(100) NOT NULL,
   roles VARCHAR(50) NOT NULL,
   address varchar(255) NOT NULL,
   PRIMARY KEY(user_id)
);

COMMIT;
