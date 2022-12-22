create table trade(
  trade_id INT GENERATED ALWAYS AS IDENTITY NOT NULL,
   user_id INT NOT NULL,
   capital VARCHAR(255) NOT NULL,
   profit VARCHAR(255) NOT NULL,
   total_number_of_trade VARCHAR(255) NOT NULL,
   amount varchar(255) NOT NULL,
   PRIMARY KEY(trade_id),
   CONSTRAINT fk_customer
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
)