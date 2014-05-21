CREATE TABLE members ( 
	id             		 int  NOT NULL,
	firstname            varchar(50) NOT NULL,
	lastname             varchar(50) NOT NULL,
	username             varchar(50) NOT NULL,
	password             varchar(50) NOT NULL,
	email                varchar(50),
	phonenumber          varchar(20),
	startyear	     	 varchar(4),
	gradyear	     	 varchar(4),
	major                varchar(20),
	class                varchar(20),
	securityquestion     varchar(60),
	securityanswer	     varchar(60),
	CONSTRAINT pk_members PRIMARY KEY ( id )
);

INSERT INTO members(id, firstname, lastname, username, password) VALUES(0, 'adminuser', 'adminuser', 'ttadmin', 'ttadmin');









































INSERT into members(memberid, firstname, lastname, email, phonenumber, grad_year, major, class, accountcreated) values(1, 'Errynne','Bell','errynne.bell@gmail.com',  '909-800-6144',  '2009',  'Structural Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(2, 'Amelia','Chu','a5chu@ucsd.edu',  '415-431-4956',  '2011',  'Electrical Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(3, 'Chuong','Do','c1do@ucsd.edu',  '408-544-0226',  '2010',  'Bioengineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(4, 'Takahiro','Kuwayama','takahiro.kuwayama@gmail.com',  '808-358-9528',  '2011',  'Computer Science',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(5, 'Christopher','Lam','ckl009@ucsd.edu',  '650-796-1986',  '2012',  'Computer Science',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(6, 'Alan','Leung','a3leung@ucsd.edu',  '714-858-3211',  '2010',  'Mechanical Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(7, 'Scott','Louie','sdlouie@ucsd.edu',  '650-773-3269',  '2012',  'Computer Science',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(8, 'Michelle','Mojica','mamojica@ucsd.edu',  '408-410-4729',  '2010',  'Aerospace Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(9, 'John','Nguyen','nguyen.p.john@gmail.com',  '714-622-8368',  '2010',  'Aerospace Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(10, 'Joe','Shao','jshao@ucsd.edu',  '408-431-4956',  '2010',  'Bioengineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(11, 'Tanakorn','Techajongchareon','mynameisbest2002@hotmail.com',  '971-732-6981',  '2012',  'Structural Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(12, 'Ashay','Verma','ashayverma@gmail.com',  '408-204-4319',  '2011',  'Computer Science',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(13, 'Xiumei','Wu','xmwu@ucsd.edu',  '646-961-7850',  '2012',  'Structural Engineering',  'Charter',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(14, 'Frank','Buchanan','rephron101@gmail.com',  '530-417-7209',  '2012',  'Mechanical Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(15, 'Andrew','Chen','ayc014@ucsd.edu',  '415-963-1880',  '2013',  'Computer Science',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(16, 'Andrew (Cheese)','Chen','anc025@ucsd.edu',  '408-667-7713',  '2012',  'Computer Science',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(17, 'Kurtis','Cheng','kurtisc07@gmail.com',  '916-479-1581',  '2012',  'Computer Science',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(18, 'Min (Paul)','Kim','paulkim0309@gmail.com',  '323-774-9501',  '2010',  'Mechanical Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(19, 'Yeon (Eddy)','Kim','badward@hotmail.com',  '408-315-7752',  '2012',  'Bioengineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(20, 'Scott','Kwang','skwang0127@gmail.com',  '510-813-0258',  '2012',  'Electrical Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(21, 'Vivian','Li','vwli@ucsd.edu',  '650-455-2134',  '2012',  'Structural Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(22, 'Leoniel','Lopez','lllopez@ucsd.edu',  '916-541-7369',  '2011',  'Computer Science',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(23, 'Lorna','Nguyen','lornatnguyen@gmail.com',  '858-531-2540',  '2012',  'Computer Science',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(24, 'Hyung','O','h1o@ucsd.edu',  '818-568-4095',  '2012',  'Aerospace Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(25, 'Benjamin','Ou','bmou@ucsd.edu',  '925-876-1042',  '2012',  'Bioengineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(26, 'Camille','Paras','cparas@ucsd.edu',  '619-947-3996',  '2012',  'Aerospace Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(27, 'Taraneh','Saeidi','tsaeidi@ucsd.edu',  '760-470-7251',  '2012',  'Structural Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(28, 'Tida','Sooreechine','tsooreec@ucsd.edu',  '310-438-8282',  '2011',  'Mechanical Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(29, 'Robert','Tran','rhtran@ucsd.edu',  '909-331-9524',  '2012',  'Computer Science',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(30, 'Kevin','Wei','k3v1nw31@gmail.com',  '626-381-8612',  '2012',  'Structural Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(31, 'Veronica','Wu','vewu@ucsd.edu',  '510-366-0192',  '2012',  'Aerospace Engineering',  'Alpha',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(32, 'Yan(Jason)','Chu','yachu@ucsd.edu',  '626-780-1526',  '2013',  'Electrical Engineering',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(33, 'Bendy','Guan','guan.bendy@gmail.com',  '626-353-8311',  '2013',  'Structural Engineering',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(34, 'Davis','Kim','dchk90@gmail.com',  '818-515-8553',  '2012',  'Chemical Engineering',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(35, 'Sheung (John)','Lee','Sel023@ucsd.edu',  '909 204-0851',  '2013',  'Mechanical Engineering',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(36, 'Sang','Park','fbmath@gmail.com',  '949-278-2126',  '2012',  'Computer Science',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(37, 'Elaine','Thai','ehthai@ucsd.edu',  '805-766-0287',  '2012',  'Structural Engineering',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(38, 'Stephanie','Yung','syung@ucsd.edu',  '323-899-7613',  '2012',  'Mechanical Engineering',  'Beta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(39, 'Taya','Chiang','ttchiang@ucsd.edu',  '510-709-5253',  '2014',  'Structural Engineering',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(40, 'Caroline','Kim','cak001@ucsd.edu',  '714-335-5854',  '2013',  'Mechanical Engineering',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(41, 'Richard','La','anyoungerone@gmail.com',  '626-283-0207',  '2011',  'Mechanical Engineering',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(42, 'Daniel','Ng','dvng@ucsd.edu',  '916-612-6573',  '2013',  'Economics',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(43, 'Scott','Ngo','swngo@ucsd.edu ',  '626-537-6412',  '2013',  'Computer Science',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(44, 'Masaki','Sono','masaki.sono@gmail.com',  '424-570-3610',  '2013',  'Computer Engineering',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(45, 'Thien','Vo','bubbleskeymousy@yahoo.com',  '626-688-1072',  '2013',  'Computer Science',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(46, 'Melvin','Wong','mhw004@ucsd.edu',  '415-215-4227',  '2013',  'Mechanical Engineering',  'Gamma',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(47, 'Tyler','Day','trday@ucsd.edu',  '951-315-5970',  '2015',  'Bioengineering',  'Delta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(48, 'Joseph','Laugian','jlauigan@ucsd.edu',  '650-922-9308',  '2014',  'Structural Engineering',  'Delta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(49, 'Daniel','Arias','d1arias@ucsd.edu',  '805-794-7181',  '2013',  'Aerospace Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(50, 'Tracey','Dinh','t2dinh1991@gmail.com ',  '323 482 8511',  '2013',  'Structural Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(51, 'Branden','Hui','bmhui@ucsd.edu',  '415-595-5985',  '2015',  'Bioengineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(52, 'Mayuko','Inoue','minoue10@gmail.com',  '760-703-3301',  '2014',  'Computer Science',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(53, 'Gurpal','Kapoor','platinumkapoor@gmail.com',  '408-319-7114',  '2014',  'Chemical Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(54, 'Gary','Lui','wlui@ucsd.edu',  '626-478-5366',  '2014',  'Structural Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(55, 'Matthew','McCaw','mgmccaw@ucsd.edu',  '509-629-0565',  '2015',  'Physics',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(56, 'An (Annie)','Ng','a6ng@ucsd.edu',  '562-293-7906',  '2012',  'Chemical Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(57, 'Jaime','Regis','jregis@ucsd.edu',  '661-477-4505',  '2014',  'Nanoengineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(58, 'Emily','Roethler','',  '760-574-3743',  '2013',  'Structural Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(59, 'Jimmy','Roh','jroh@ucsd.edu',  '562-760-5609',  '2013',  'Mechanical Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(60, 'Johnny','Tran','jnt002@ucsd.edu',  '619-940-4271',  '2014',  'Computer Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(61, 'Abdallah (AB)','Shaheen','abshaheen@hotmail.com',  '949-370-7058',  '2013',  'Chemical Engineering',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(62, 'Ryan','Soo','rsoo@ucsd.edu',  '925-785-7448',  '2014',  'Computer Science',  'Epsilon',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(63, 'Jonathan','Chen','jyc041@ucsd.edu ',  '626-318-3851',  '2014',  'Bioengineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(64, 'Asher','Garland','asher.garland@gmail.com ',  '408-658-2025',  '2013',  'Computer Science',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(65, 'Phillip','Graham','disxisxphillip@gmail.com',  '858-472-7511',  '2014',  'Chemical Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(66, 'Masatoshi','Kato',' makato@ucsd.edu ',  '310-463-8045',  '2014',  'Structural Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(67, 'John','Lau','jjlau90@gmail.com ',  '626-927-6383',  '2013',  'Mechanical Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(68, 'Yew','Leong','yjleong@ucsd.edu ',  '201-675-7853',  '2015',  'Nanoengineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(69, 'John','Recchio','johnrecchiojr@gmail.com ',  '559-367-5195',  '2013',  'Electrical Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(70, 'Kenneth','Tse','wyhkenneth@gmail.com ',  '626-675-6303',  '2015',  'Environmental Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(71, 'Joshua','Vallecillos','jvalleci@ucsd.edu ',  '626-434-6983',  '2013',  'Structural Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(72, 'Vanessa','Xia','xia.vanessa@yahoo.com',  '650-564-4890',  '2015',  'Chemical Engineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(73, 'Alice','Yu','xaliceyu@yahoo.com ',  '650-269-2826',  '2015',  'Bioengineering',  'Zeta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(74, 'Jacky','Chan','j5chan@ucsd.edu ',  '510 610-0062',  '2013',  'Computer Science',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(75, 'Andrew','Chuong','alchuong@ucsd.edu',  '415-672-4021',  '2015',  'Environmental Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(76, 'Natascha','Espiritu','nespirit@ucsd.edu',  '858-722-0836',  '2015',  'Chemical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(77, 'Benjie','Genchel','bgenchel@ucsd.edu',  '818-445-0826',  '2014',  'Electrical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(78, 'Grace','Jang','g3jang@ucsd.edu',  '951-403-5078',  '2014',  'Aerospace Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(79, 'Andy','Kieatwong',' andrewk9494@gmail.com ',  '702-335-2409',  '2015',  'Aerospace Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(80, 'Judy','Lao','jlao@ucsd.edu',  '310-895-6998',  '2013',  'Chemical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(81, 'Carol','Luengas',' cluengas@ucsd.edu',  '609-442-8216',  '2015',  'Structural Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(82, 'Jamie','Luong','jal138@ucsd.edu',  '916-539-2302',  '2015',  'Bioengineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(83, 'Luis','Meraz','lmeraz@ucsd.edu',  '619-519-5872',  '2013',  'Mechanical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(84, 'Chris','Nguyen',' ctn027@ucsd.edu',  '818-534-6921',  '2015',  'Mechanical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(85, 'Skylar','Pagenkopf','skylar.pagenkopf@gmail.com',  '619-306-2224',  '2014',  'Computer Science',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(86, 'Thaomi','Phuong','tphuong@ucsd.edu ',  '714-487-7927',  '2015',  'Bioengineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(87, 'Howard','Tai','c2tai@ucsd.edu ',  '510-565-0769',  '2014',  'Mechanical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(88, 'Mio','Unno','mio_u@sbcglobal.net',  '469-826-1317',  '2015',  'Environmental Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(89, 'Michael','Wang','m.y.wang92@gmail.com ',  '510-861-4617',  '2015',  'Mechanical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(90, 'Edward','Wong','e4wong@ucsd.edu',  '415-254-3527',  '2015',  'Computer Science',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(91, 'Linda','Wong','ylwong@ucsd.edu ',  '858-652-9851',  '2014',  'Electrical Engineering',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(92, 'Alex','Yang','alyx.yang@gmail.com ',  '650-391-7728',  '2015',  'Computer Science',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(93, 'Jamie','Yang',' jamiey108@gmail.com',  '626-688-9251',  '2015',  'Computer Science',  'Eta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(94, 'Robert','An','rca145@yahoo.com ',  '858-414-7679',  '',  'Electrical Engineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(95, 'Laurence','Chen','chenlaurence@gmail.com ',  '909-456-4118',  '',  'Bioengineering, Biotech',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(96, 'Renn','Darawali','redarawa@ucsd.edu',  '415-533-5439',  '2015',  'Environmental Engineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(97, 'Eric','Fossum','efossum@ucsd.edu',  '209-628-8399',  '2014',  'Bioengineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(98, 'Daniel','Kang','danielgkang93@gmail.com',  '818-319-9292',  '2015',  'Computer Science',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(99, 'Tyler','Nakaya','Tyler.Nakaya@gmail.com',  '510-909-5495',  '',  'Environmental Engineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(100, 'Elliott','Park','contactelliott@gmail.com',  '310-415-2230',  '2015',  'Mechanical Engineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(101, 'Emily','Phan','emphan@ucsd.edu',  '415-912-7375',  '',  'Environmental Engineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(102, 'Jennifer','Phung',' jenniferphung11@gmail.com',  '626-278-2606',  '2015',  'Structural Engineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(103, 'Justin','Salgado','cupn00dle55@gmail.com',  '818-571-0554',  '',  'Nanoengineering',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(104, 'Taylor','Takao','ttakao@ucsd.edu',  '415-299-1250',  '2016',  'Bioengineering, Biotech',  'Theta',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(105, 'Patrick','Chen','chenpatrick741@yahoo.com',  '626-272-8126',  '2014',  'Structural Engineering',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(106, 'Azhar','Deen','aadeen@ucsd.edu',  '408-569-7878',  '',  'Biology: Bioengineering',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(107, 'Putthawan (Aeri)','Iamsiriwathorn','piamsiri@ucsd.edu',  '818-813-2234',  '',  'Computer Science',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(108, 'Thomas','Kuo','thkuo@ucsd.edu',  '909-568-9076',  '',  'Bioengineering, Biotech',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(109, 'Yutang','Lin','yul141@ucsd.edu',  '858-242-6318',  '',  'Computer Science',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(110, 'Michael','Luo','mzluo@ucsd.edu',  '510-499-3351',  '',  'Computer Science',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(111, 'Woongkee (Sean)','Min','womin@ucsd.edu',  '858-531-8715',  '',  'Structural Engineering',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(112, 'Andrew','Sie','andrewsie326@gmail.com',  '626-617-6556',  '',  'Computer Science',  'Iota',  false);
INSERT into members(memberid, firstname, lastname, email, phonenumber, year, major, class, accountcreated) values(113, 'Sharon','Zheng','s5zheng@ucsd.edu',  '661-350-1381',  '',  'Computer Science',  'Iota',  false);
