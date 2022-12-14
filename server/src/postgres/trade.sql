create table trade(
  trade_id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   balance VARCHAR(255) NOT NULL,
   capital VARCHAR(255),
   profit VARCHAR(255),
   total_number_of_trade VARCHAR(255),
   amount varchar(255),
   PRIMARY KEY(trade_id),
   CONSTRAINT fk_customer
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
)