DROP DATABASE IF EXISTS LIBRARY;
CREATE DATABASE LIBRARY;
USE LIBRARY;

ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';

-- AUTHORS IN THE DATABASE
DROP TABLE IF EXISTS AUTHORS;
CREATE TABLE AUTHORS (
	Author_ID int not null AUTO_INCREMENT,
    Author_Name varchar(60),
    PRIMARY KEY (Author_ID)
);

INSERT INTO AUTHORS(Author_Name)
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

DROP TABLE IF EXISTS GENRES;
CREATE TABLE GENRES
(
	Genre_ID INT NOT NULL AUTO_INCREMENT,
    Genre_Name varchar(100),
    PRIMARY KEY (Genre_ID)
);

INSERT INTO GENRES (Genre_Name)
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
    FOREIGN KEY (Author_ID) REFERENCES AUTHORS(Author_ID),
    FOREIGN KEY (Genre_ID) REFERENCES GENRES(Genre_ID)
);

INSERT INTO BOOKS(Title, Author_ID, Genre_ID, Year_Made)
VALUES 
('Percy Jackson and The Lightning Thief', 1, 1, 2005), 
('Percy Jackson and The Sea of Monsters', 1, 1, 2006), 
('Percy Jackson and The Titans Curse', 1, 1, 2007), 
('Percy Jackson and The Battle of the Labyrinth', 1, 1, 2008), 
('Percy Jackson and The Last Olympian', 1, 1, 2009),
('Belladonna', 7, 7, 2022),
('Harry Potter and The Philosopher\'s Stone', 2, 1, 1998), 
('The Hunger Games', 3, 3, 2008), 
('Cinder', 4, 3, 2011), 
('The Maze Runner', 8, 3, 2014), 
('Pride and Prejudice', 5, 6, 1813),
('Dorian Gray', 9, 5, 1891),
('It', 10, 5, '1986'),
('The Great Gatsby', 11, 2, '1925'),
('Moby-Dick', 12, 4, '1851'),
('People We Meet on Vacation', 13, 6, '2021'),
('Heartstopper', 14, 8, '2019'),
('Sapiens: A Brief History of Humankind', 15, 9, '2011'),
('The Girl with the Dragon Tattoo', 16, 10, '2005'),
('I\'m Glad My Mom Died', 17, 11, '2022'),
('Home Body', 18, 12, '2020'),
('Milk and honey', 18, 12, '2014'),
('The Sun and Her Flowers', 18, 12, '2017'),
('The Fault in Our Stars', 19, 13, '2012'),
('The Book Thief', 20, 13, '2005'),
('The Giver', 21, 13, '1993'),
('Simon vs. the Homo Sapiens Agenda', 22, 13, '2015'),
('Stargirl', 23, 13, '2000'),
('Nimona', 24, 8, '2015'),
('Becoming', 25, 11, '2018');

-- COMMUNITIES 
DROP TABLE IF EXISTS CLUBS;
CREATE TABLE CLUBS (
    Club_ID INT NOT NULL AUTO_INCREMENT,
    Topic VARCHAR(100),
    Year_Made INT,
    PRIMARY KEY (Club_ID)
);

INSERT INTO CLUBS(Topic, Year_Made)
VALUES
('Percy Jackson Club', 2018), 
('The Wizarding World Club', 2010), 
('Hunger Games Club', 2010), 
('The Lunar Chronicles Club', 2018),
('Rupi Kaur\'s Poetry Book Club', 2020),
('All Things Hearstopper Book Club', 2022),
('John Green Fan Club', 2017),
('Horror Books If You Dare Book Club', 2016);

-- COMMUNITY POSTS
DROP TABLE IF EXISTS COMMUNITY_POSTS;
CREATE TABLE COMMUNITY_POSTS (
    Post_ID INT NOT NULL AUTO_INCREMENT,
    Community_ID INT,
    Post VARCHAR(100),
    Author VARCHAR(100),
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Post_ID),
    FOREIGN KEY (Community_ID) REFERENCES CLUBS(Club_ID)
);

-- COMMENTS
DROP TABLE IF EXISTS COMMENTS;
CREATE TABLE COMMENTS (
    Comment_ID INT NOT NULL AUTO_INCREMENT,
    Post_ID INT,
    Comments VARCHAR(100),
    Author VARCHAR(100),
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Comment_ID),
    FOREIGN KEY (Post_ID) REFERENCES COMMUNITY_POSTS(Post_ID)
);

-- READERS LOG IN
DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
	User_ID 			INT NOT NULL AUTO_INCREMENT,
    Username          varchar(100) not null,
	User_Email			varchar(100) not null,
    primary key (User_ID)
);

INSERT INTO USERS (Username, User_Email)
VALUES
('Hooriya', 'hooriya624@gmail.com');

-- FAVOURITES
DROP TABLE IF EXISTS FAVOURITES;
CREATE TABLE FAVOURITES (
	User_ID int,
    Book_ID int,
    FOREIGN KEY (User_ID) REFERENCES  USERS(User_ID),
    FOREIGN KEY (Book_ID) REFERENCES BOOKS(Book_ID)
);

INSERT INTO FAVOURITES(User_ID, Book_ID)
VALUES
(1, 1),
(1, 6);