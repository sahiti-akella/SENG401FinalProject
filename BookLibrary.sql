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
('Adalyn Grace');

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
(5, 'Percy Jackson and The Last Olympian', 'Rick Riordan', 'Fantasy', 2009);

-- MOVIE RECOMMENDATIONS
DROP TABLE IF EXISTS MOVIES;
CREATE TABLE MOVIES (
    Movie_ID int not null AUTO_INCREMENT,
    Title VARCHAR(100),
    Genre VARCHAR(60),
    Year_Made INT,
    PRIMARY KEY (Movie_ID)
);

INSERT INTO MOVIES (Movie_ID, Title, Genre, Year_Made)
VALUES
(1, 'Percy Jackson and The Lightning Thief', 'Fantasy', 2010),
(2, 'Percy Jackson and The Sea of Monsters', 'Fantasy', 2013),
(3, 'Harry Potter and The Philosopher\'s Stone', 'Fantasy', 2001);

DROP TABLE IF EXISTS BOOK_MOVIE_RECOMMENDATIONS;
CREATE TABLE BOOK_MOVIE_RECOMMENDATIONS (
    Book_ID INT,
    Movie_Rec INT,
    FOREIGN KEY (Book_ID) REFERENCES BOOKS(Book_ID),
    FOREIGN KEY (Movie_Rec) REFERENCES MOVIES(Movie_ID)
);

INSERT INTO BOOK_MOVIE_RECOMMENDATIONS (Book_ID, Movie_Rec)
VALUES
(1, 1),
(1, 2),
(1, 3);

-- TV SHOW RECOMMENDATIONS 
DROP TABLE IF EXISTS TV_SHOWS;
CREATE TABLE TV_SHOWS (
    Show_ID INT NOT NULL AUTO_INCREMENT,
    Title VARCHAR(100),
    Genre VARCHAR(60),
    Year_Made INT,
    PRIMARY KEY (Show_ID)
);

INSERT INTO TV_SHOWS (Show_ID, Title, Genre, Year_Made)
VALUES
(1, 'Percy Jackson and The Olympians: Season 1', 'Fantasy', 2023);

DROP TABLE IF EXISTS BOOK_TV_SHOW_RECOMMENDATIONS;
CREATE TABLE BOOK_TV_SHOW_RECOMMENDATIONS (
    Book_ID INT,
    Show_Rec INT,
    FOREIGN KEY (Book_ID) REFERENCES BOOKS(Book_ID),
    FOREIGN KEY (Show_Rec) REFERENCES TV_SHOWS(Show_ID)
);

INSERT INTO BOOK_TV_SHOW_RECOMMENDATIONS (Book_ID, Show_Rec)
VALUES
(1, 1);
