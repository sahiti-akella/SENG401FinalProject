DROP DATABASE IF EXISTS LIBRARY;
CREATE DATABASE LIBRARY;
USE LIBRARY;

ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';

-- AUTHORS IN THE DATABASE
DROP TABLE IF EXISTS AUTHOR;
CREATE TABLE AUTHOR (
	Author_ID int not null AUTO_INCREMENT,
    Author_Name varchar(60),
    PRIMARY KEY (Author_ID)
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
('Oscar Wilde'),
('Stephen King'),
('F. Scott Fitzgerald'),
('Herman Melville'),
('Emily Henry'),
('Alice Oseman'),
('Yuval Noah Harari'),
('Stieg Larsson'),
('Jennette McCurdy'),
('Rupi Kaur'),
('John Green'),
('Markus Zusak'),
('Lois Lowry'),
('Becky Albertalli'),
('Jerry Spinelli'),
('ND Stevenson'),
('Michelle Obama');

DROP TABLE IF EXISTS GENRE;
CREATE TABLE GENRE
(
	ID INT NOT NULL AUTO_INCREMENT,
    Genre_Name varchar(100),
    PRIMARY KEY (ID)
);

INSERT INTO GENRE (Genre_Name)
VALUES
('Fantasy'), 
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

-- BOOKS IN THE DATABASE
DROP TABLE IF EXISTS BOOKS;
CREATE TABLE BOOKS (
    Book_ID int not null AUTO_INCREMENT,
    Title varchar(100),
    Author_ID int,
    Genre_ID int,
    Year_Made int,
    PRIMARY KEY (Book_ID),
    FOREIGN KEY (Author_ID) REFERENCES AUTHOR(Author_ID),
    FOREIGN KEY (Genre_ID) REFERENCES GENRE(ID)
);

INSERT INTO BOOKS(Book_ID, Title, Author_ID, Genre_ID, Year_Made)
VALUES 
(1, 'Percy Jackson and The Lightning Thief', 1, 1, 2005), 
(2, 'Percy Jackson and The Sea of Monsters', 1, 1, 2006), 
(3, 'Percy Jackson and The Titans Curse', 1, 1, 2007), 
(4, 'Percy Jackson and The Battle of the Labyrinth', 1, 1, 2008), 
(5, 'Percy Jackson and The Last Olympian', 1, 1, 2009),
(6, 'Belladonna', 7, 7, 2022),
(7, 'Harry Potter and The Philosopher\'s Stone', 2, 1, 1998), 
(8, 'The Hunger Games', 3, 3, 2008), 
(9, 'Cinder', 4, 3, 2011), 
(10, 'The Maze Runner', 8, 3, 2014), 
(11, 'Pride and Prejudice', 5, 6, 1813),
(12, 'Dorian Gray', 9, 5, 1891),
(13, 'It', 10, 5, '1986'),
(14, 'The Great Gatsby', 11, 2, '1925'),
(15, 'Moby-Dick', 12, 4, '1851'),
(16, 'People We Meet on Vacation', 13, 6, '2021'),
(17, 'Heartstopper', 14, 8, '2019'),
(18, 'Sapiens: A Brief History of Humankind', 15, 9, '2011'),
(19, 'The Girl with the Dragon Tattoo', 16, 10, '2005'),
(20, 'I\'m Glad My Mom Died', 17, 11, '2022'),
(21, 'Home Body', 18, 12, '2020'),
(22, 'Milk and honey', 18, 12, '2014'),
(23, 'The Sun and Her Flowers', 18, 12, '2017'),
(24, 'The Fault in Our Stars', 19, 13, '2012'),
(25, 'The Book Thief', 20, 13, '2005'),
(26, 'The Giver', 21, 13, '1993'),
(27, 'Simon vs. the Homo Sapiens Agenda', 22, 13, '2015'),
(28, 'Stargirl', 23, 13, '2000'),
(29, 'Nimona', 24, 8, '2015'),
(30, 'Becoming', 25, 11, '2018');

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
(2, 'The Wizarding World Club', 2010), 
(3, 'Hunger Games Club', 2010), 
(4, 'The Lunar Chronicles Club', 2018),
(5, 'Rupi Kaur\'s Poetry Book Club', 2020),
(6, 'All Things Hearstopper Book Club', 2022),
(7, 'John Green Fan Club', 2017),
(8, 'Horror Books If You Dare Book Club', 2016);

-- READERS AND AUTHORS LOG IN

DROP TABLE IF EXISTS USER_ACCOUNT;
CREATE TABLE USER_ACCOUNT (
    Username          varchar(100) not null,
	User_Email			varchar(100) not null,
	Login_Password		varchar(100) not null,
    User_Role			varchar(50) not null,
    primary key (User_Email)
);

/*DROP TABLE IF EXISTS AUTHOR_LOGIN;
CREATE TABLE AUTHOR_LOGIN (
	Login_Password		varchar(100) not null,
    primary key (Login_Password)
);

INSERT INTO AUTHOR_LOGIN (Login_Password)
VALUES
('sY7he5oP83bt3Q');*/

INSERT INTO USER_ACCOUNT (Username, User_Email, Login_Password, User_Role)
VALUES
('hooriya', 'hooriya624@gmail.com', 'coolpassword', 'admin'),
('John', 'jgreen@yahoo.ca', 'johnthegreen', 'author'),
('nikki', 'nikita123@gmail.com', 'passwordistheway', 'admin');