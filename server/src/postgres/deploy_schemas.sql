-- DEPLOY FRESH DATABASE TABLES
\i '/docker-entrypoint-initdb.d/tables/users.sql' 
\i '/docker-entrypoint-initdb.d/tables/logins.sql' 
\i '/docker-entrypoint-initdb.d/tables/bank_details.sql' 
\i '/docker-entrypoint-initdb.d/tables/trade.sql' 