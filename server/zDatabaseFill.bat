@echo off
call npm run knex migrate:latest
call npm run knex seed:run
echo ********
echo *********
echo **********
echo DATABASE READY
echo **********
echo *********
echo ********