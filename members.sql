DROP TABLE members;

CREATE TABLE members ( 
	id             		 integer PRIMARY KEY NOT NULL,
	firstname            text 	 NOT NULL,
	lastname             text 	 NOT NULL,
	username             text 	 UNIQUE NOT NULL,
	password             text 	 NOT NULL,
	email                text,
	phonenumber          text,
	startyear	     	 integer,
	gradyear	     	 integer,
	major                text 	 NOT NULL,
	class                text 	 NOT NULL,
	securityquestion     text,
	securityanswer	     text
);

INSERT INTO members(id, firstname, lastname, username, password, major, class) VALUES(0, 'adminuser', 'adminuser', 'ttadmin', 'ttadmin', 'none', 'none');




