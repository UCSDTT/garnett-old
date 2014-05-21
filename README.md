TTUCSD-WebApp
=============

UCSD Theta Tau Web application and server



Setting up the app on your local machine
========================================
sudo npm install <-- this installs dependencies for the project



Installing some packages may fix some errors if that didn't work:
===============================
sudo apt-get install libpq-dev

sudo npm -g install node-gyp



If you get a weird error about clock skew after the previous commands, try this:

touch [file-name-here] <-- Use this to fix clock skew problem



Installing PostgreSQL:
======================
https://www.digitalocean.com/community/articles/how-to-install-and-use-postgresql-on-ubuntu-12-04

sudo su - postgres (password is also postgres if required)

createuser --pwprompt

Enter name of role to add: ttuser

Enter password: ttuser

Re-enter password: ttuser

Shall the new role be a superuser? (y/n) y 

createdb ttapp



To access database ttapp that you created:
==========================================

sudo su - postgres <-- login

psql -d ttapp <-- enter postgres cmd

[!!!!Now go to the file members.sql and paste the CREATE TABLE and INSERT queries from there into postgres!!!!]

\dt <-- show tables
\q  <-- quit


