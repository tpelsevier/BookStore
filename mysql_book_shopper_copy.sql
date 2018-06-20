CREATE DATABASE shopping;



USE shopping;



CREATE TABLE ShoppingUsers(

	uid int NOT NULL auto_increment,

	uname varchar(30) NOT NULL,

	pword varchar(30) NOT NULL,

	fname varchar(30) NOT NULL,

	lname varchar(30) NOT NULL,

	PRIMARY KEY(uid));



CREATE TABLE Book(

	isbn int NOT NULL,

	title varchar(70) NOT NULL,

	author varchar(40) NOT NULL,

	genre varchar(20) NOT NULL,

	volume int,

	edition int,

	quantity int NOT NULL,

	price float(10,2) NOT NULL,

	PRIMARY KEY(isbn));



CREATE TABLE ShoppingCart(

	uid int NOT NULL,

	isbn int NOT NULL,

	quantity int NOT NULL,

	PRIMARY KEY(uid, isbn));



CREATE TABLE WaitList(

	isbn int NOT NULL,

	quantity_ordered int NOT NULL,

	PRIMARY KEY(isbn));



CREATE TABLE OrderHistory(

	oid int NOT NULL,

	uid int NOT NULL,

	isbn int NOT NULL,

	quantity int NOT NULL,

	order_date date NOT NULL,

	PRIMARY KEY(oid, uid, isbn));