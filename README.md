#UCSD Theta Tau Web Application and Server  

##Setting up Vagrant

#####EASY WAY: (May or may not work for you...works for OSX I believe)
after installing VirtualBox and Vagrant, run this script in the root directory:
`curl -L http://rove.io/install | bash`

#####MANUAL WAY:

1. Install VirtualBox from here: https://www.virtualbox.org/wiki/Downloads (I am using 4.3.12, but get the latest version)
2. Install vagrant from here:  http://www.vagrantup.com/
3. Install Chef by using the command: `gem install librarian-chef` (note you will need Ruby installed on your computer, 4. check if you have it by typing `ruby -v`)
5. Navigate to the application root directory, where the Vagrantfile and Cheffile are.
6. Run `librarian-chef install`, this installs all dependencies our vagrant virtual machine is going to use
7. Run `vagrant up` to download, provision and start your brand new box environment


*NOTE: This process is going to take a LONG time.  So be patient.*


##Setting up the app on your local machine
`sudo npm install` <-- this installs dependencies for the project

(You actually don't have to do this since I pushed the node_modules folder to this repo)  
*this is only temporary, will fix this soon, if you run into problems delete your node_modules folder
and run `npm install` again.*

**Installing some packages may fix some errors if that didn't work:**  
`sudo apt-get install libpq-dev`  
`sudo npm -g install node-gyp`  
If you get a weird error about clock skew after the previous commands, try this:  
touch [file-name-here] <-- Use this to fix clock skew problem



##Setting up PostgreSQL on Local Machine:
Postgres is preinstalled to the Vagrant Box.  
Once your virtual machine is up and running, run these commands to set up the database:  

1. `sudo su - postgres` (password is also postgres if required)
2. `createuser --pwprompt`
3. Enter name of role to add: `ttuser`
4. Enter password: `ttuser`
5. Re-enter password: `ttuser`
6. Shall the new role be a superuser? (y/n) `y` 
7. `createdb ttapp`

Reference: https://www.digitalocean.com/community/articles/how-to-install-and-use-postgresql-on-ubuntu-12-04

##To access database ttapp that you created:

`sudo su - postgres` <-- login  
`psql -d ttapp` <-- enter postgres cmd  
**Now go to the file members.sql and paste the CREATE TABLE and INSERT queries from there into postgres!!**  
`\dt` <-- show tables  
`\q`  <-- quit


##To Run the Application:

1. First, make sure you have followed the steps to create the database and insert the sample rows above.
2. In the terminal, type `node app.js`
3. View the application in your browser at [localhost:3000](http://localhost:3000/)
*NOTE: if you get an error try to delete the pg directory under node_modules/, run npm install. and try again.*
