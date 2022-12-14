create table bank_details(
  bank_id int generated always as identity, 
  user_id int,
  bank_name varchar(255),
  account_number varchar(255),
  wallet_address varchar(255),
  primary key(bank_id),
  constraint fk_customer
  foreign key(user_id)
  references users(user_id)
)