BEGIN TRANSACTION;

INSERT INTO users (first_name, last_name, email, phone_number, date_of_birth, investment, roles, address) VALUES ('theo', 'scott', 'theo@gmail.com', '8089089', '2000-04-08', 'classic', 'admin', 'osayande street')

INSERT INTO logins (email, hash) VALUES ('theo@gmail.com', '')
COMMIT