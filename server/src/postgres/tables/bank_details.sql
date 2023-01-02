

CREATE TABLE bank_details(
  bank_id int generated always as identity NOT NULL, 
  user_id int NOT NULL,
  bank_name varchar(255) NOT NULL,
  account_number varchar(255) NOT NULL,
  wallet_address varchar(255) NOT NULL,
  primary key(bank_id),
  constraint fk_customer
  foreign key(user_id)
  references users(user_id)
);

