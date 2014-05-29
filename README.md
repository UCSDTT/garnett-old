TTUCSD-WebApp
=============

UCSD Theta Tau Web application and server

Setting up Vagrant
========================================
0. Install VirtualBox from here: https://www.virtualbox.org/wiki/Downloads (I am using 4.3.12, but get the latest version)
1. Install vagrant from here:  http://www.vagrantup.com/
2. Install Chef by using the command: 'gem install librarian-chef' 
(note you will need Ruby installed on your computer, check if you have it by typing 'ruby -v')
3. Navigate to the application root directory, where the Vagrantfile and Cheffile are.
4. Run 'librarian-chef install' <- installs all dependencies our vagrant virtual machine is going to use
5. Run 'vagrant up' <- to download, provision and start your brand new box environment

NOTE: This process is going to take a LONG time.  So be patient.


Setting up the app on your local machine
========================================
sudo npm install <-- this installs dependencies for the project

(You actually don't have to do this since I pushed the node_modules folder to this repo)
^ this is only temporary, will fix this soon


Installing some packages may fix some errors if that didn't work:
===============================
sudo apt-get install libpq-dev

sudo npm -g install node-gyp



If you get a weird error about clock skew after the previous commands, try this:

touch [file-name-here] <-- Use this to fix clock skew problem



Setting up/ download local PostgreSQL db:
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


To Run the Application:
==========================================
1. First, make sure you have followed the steps to create the database and insert the sample rows above.
2. In the terminal, type "node app.js"
3. View the application in your browser at "localhost:3000"

NOTE: if you get an error try to delete the pg directory under node_modules/, run npm install. and try again.
