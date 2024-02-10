DROP DATABASE IF EXISTS LIBRARY;
CREATE DATABASE LIBRARY;
USE LIBRARY;

-- AUTHORS IN THE DATABASE
DROP TABLE IF EXISTS AUTHOR;
CREATE TABLE AUTHOR (
    Author_Name varchar(60),
    PRIMARY KEY (Author_Name)
);

INSERT INTO AUTHOR(Author_Name)
VALUES 
('Rick Riordan'), 
('JK Rowling'), 
('Suzanne Collins'), 
('Marissa Meyer'), 
('Jane Austen'), 
('Arthur Conan Doyle'), 
('Adalyn Grace'),
('James Dashner'),
('Oscar Wilde'); 

-- BOOKS IN THE DATABASE
DROP TABLE IF EXISTS BOOKS;
CREATE TABLE BOOKS (
    Book_ID int not null AUTO_INCREMENT,
    Title varchar(100),
    Author varchar(50),
    Genre varchar(60),
    Year_Made int,
    PRIMARY KEY (Book_ID),
    FOREIGN KEY (Author) REFERENCES AUTHOR(Author_Name)
);

INSERT INTO BOOKS(Book_ID, Title, Author, Genre, Year_Made)
VALUES 
(1, 'Percy Jackson and The Lightning Thief', 'Rick Riordan', 'Fantasy', 2005), 
(2, 'Percy Jackson and The Sea of Monsters', 'Rick Riordan', 'Fantasy', 2006), 
(3, 'Percy Jackson and The Titans Curse', 'Rick Riordan', 'Fantasy', 2007), 
(4, 'Percy Jackson and The Battle of the Labyrinth', 'Rick Riordan', 'Fantasy', 2008), 
(5, 'Percy Jackson and The Last Olympian', 'Rick Riordan', 'Fantasy', 2009),
(6, 'Belladonna', 'Adalyn Grace', 'Murder Mystery', 2022),
(7, 'Harry Potter and The Philosopher\'s Stone', 'JK Rowling', 'Fantasy', 1998), 
(8, 'The Hunger Games', 'Suzanne Collins', 'Science Fiction', 2008), 
(9, 'Cinder', 'Marissa Meyer', 'Science Fiction', 2011), 
(10, 'The Maze Runner', 'James Dashner', 'Science Fiction', 2014), 
(11, 'Pride and Prejudice', 'Jane Austen', 'Romance', 1813),
(12, 'Dorian Gray', 'Oscar Wilde', 'Horror', 1891); 

-- COMMUNITIES 
DROP TABLE IF EXISTS CLUBS;
CREATE TABLE CLUBS (
    Club_ID INT NOT NULL AUTO_INCREMENT,
    Topic VARCHAR(100),
    Year_Made INT,
    PRIMARY KEY (Club_ID)
);

INSERT INTO CLUBS(Club_ID, Topic, Year_Made)
VALUES
(1, 'Percy Jackson Club', 2018), 
(2, 'Harry Potter Club', 2010), 
(3, 'Hunger Games Club', 2010), 
(4, 'The Lunar Chronicles Club', 2018); 

-- READERS AND AUTHORS LOG IN

DROP TABLE IF EXISTS USER_ACCOUNT;
CREATE TABLE USER_ACCOUNT (
	User_Email			varchar(100) not null,
	Login_Password		varchar(100) not null,
    primary key (User_Email)
);

DROP TABLE IF EXISTS AUTHOR_LOGIN;
CREATE TABLE AUTHOR_LOGIN (
	Login_Password		varchar(100) not null,
    primary key (Login_Password)
);

INSERT INTO AUTHOR_LOGIN (Login_Password)
VALUES
('sY7he5oP83bt3Q');

INSERT INTO USER_ACCOUNT (User_Email, Login_Password)
VALUES
('hooriya624@gmail.com', 'coolpassword'); 

DROP TABLE IF EXISTS GENRE;
CREATE TABLE GENRE
(
	ID INT NOT NULL AUTO_INCREMENT,
    Genre_Name varchar(100),
    PRIMARY KEY (ID)
);

INSERT INTO GENRE (Genre_Name)
VALUES('Fantasy'), 
('Fiction'), 
('Sci-Fi'),
('Adventure'),
('Horror'),
('Romance'),
('Mystery'),
('Graphic Novel'),
('Non-Fiction'),
('Thriller'),
('Memoir'),
('Poetry'),
('Young Adult');