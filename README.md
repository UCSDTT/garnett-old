#UCSD Theta Tau Web Application and Server

Web application for members of the Epsilon Delta Chapter of Theta Tau.
This application is currently under development.
Visit us at: [UCSD Theta Tau](http://thetatau.ucsd.edu/)

##Setting up Vagrant
*Before doing anything else, you must first install NodeJS (which comes bundled with NPM package manager) here:*
[Install NodeJS](http://nodejs.org/)

#####MANUAL WAY:
1. Install VirtualBox from here: https://www.virtualbox.org/wiki/Downloads (I am using 4.3.12, but get the latest version)
2. Install vagrant from here:  http://www.vagrantup.com/
3. Install Chef by using the command: `gem install librarian-chef` (note you will need Ruby installed on your computer, 4. check if you have it by typing `ruby -v`)
5. Navigate to the application root directory, where the Vagrantfile and Cheffile are.
6. Run `librarian-chef install`, this installs all dependencies our vagrant virtual machine is going to use
7. Run `vagrant up` to download, provision and start your brand new box environment
*NOTE: This process is going to take a LONG time.  So be patient.*

##Setting up the app on your local machine
1. `vagrant ssh` to ssh into the virtual machine
2. `cd /vagrant` takes you to your project directory
3. `sudo npm install` <-- this installs dependencies for the project
(You actually don't have to do this since I pushed the node_modules folder to this repo)
*this is only temporary, will fix this soon, if you run into problems delete your node_modules folder
and run `npm install` again.*
4. Follow the database setup instructions below.

##To Run the Application:
1. SSH into vagrant using `vagrant ssh` if not connected already.
2. Make sure you have followed the steps to create the database and insert the sample rows above.
3. Navigate to the application root directory, by typing `cd /vagrant`.
4. In the terminal, type `node app.js`.
5. View the application in your browser at [localhost:3000](http://localhost:3000/).
*NOTE: if you get an error delete node_modules/ directory, run `npm install`. and try again.*
