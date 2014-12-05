<img alt="Garnett" src="http://cdn.imghack.se/images/145a94ce83eb940739d13bcd5182e5fd.png" height="200px" />

[![Build Status](https://travis-ci.org/UCSDTT/Garnett.svg?branch=master)](https://travis-ci.org/UCSDTT/Garnett)

Web application for members of the Epsilon Delta Chapter of Theta Tau.
This application is currently under development.
Visit us at: [UCSD Theta Tau](http://thetatau.ucsd.edu/)

##Setting up the app on your local machine ( using cloud9 IDE )
1. Make a cloud9 ide account here, *signing up using your github account:* [Cloud9 IDE](https://c9.io).
2. Once inside your dashboard, `Create New Workspace`, by hitting the green button on the upper left, and selecting `Clone from URL`: [https://github.com/bgenchel/TTUCSD-WebApp.git](https://github.com/bgenchel/TTUCSD-WebApp.git).
3. Once your workspace is created, select it from the menu on the left and click `Start Editing` to enter your workspace.
4. Run `npm install` (without sudo!) in the bash terminal to install all the required dependencies.

If there are permission issues, run these and then step 4 again:

    sudo npm cache clean
    sudo chown -R `whoami` ~/.npm
    sudo chown -R `whoami` node_modules
    sudo rm -r node_modules
5. Pull the data in case your version is out of date by typing: `git pull origin master`

##To Run the Application:
IMPORTANT: Before running the application you must create a `.env` file with database credentials in the root directory of the application.
It will look something like `DB_CREDENTIALS=postgres://username:password@hostname/db`.  Ask an authorized administrator for proper credentials.

1. Start the application by running the `app.js` file. (Right-click the file and click run)
2. At the top of the terminal, you should see something along the lines of `Your code is running at https://workspacename-c9-username.c9.io.`
3. Visit that link in your browser to see the application in action!

##Testing:
We use Karma and Jasmine for our Unit Test setup.
End-to-end testing with Protractor will be added soon.
Any changes made to remote will be automatically checked against all unit tests using Travis.ci.

To run unit tests, run
`node_modules/.bin/karma start karma.conf.js`

##Access Database:
ssh into machine
su - <username_here>
psql
\du :: display users
\list :: list all databases
\c <db_name_here> :: connect to a database
\dt :: display tables of current database
\q :: quit the shell

##Date format
'2011-05-16 15:36:38' (ANSII Standard)