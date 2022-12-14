CREATE TABLE users(
   user_id INT GENERATED ALWAYS AS IDENTITY,
   first_name VARCHAR(255) NOT NULL,
   last_name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   phone_number varchar(50),
   date_of_birth date,
   investment varchar(100),
   address varchar(255),
   PRIMARY KEY(user_id)
);