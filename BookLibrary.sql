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
    Author varchar(100),
    Genre_ID int,
    Year_Made int,
    PRIMARY KEY (Book_ID),
    FOREIGN KEY (Genre_ID) REFERENCES GENRES(Genre_ID)
);

INSERT INTO BOOKS(Title, Author, Genre_ID, Year_Made)
VALUES 
('Percy Jackson and The Lightning Thief', 'Rick Riordan', 1, 2005), 
('Percy Jackson and The Sea of Monsters', 'Rick Riordan', 1, 2006), 
('Percy Jackson and The Titans Curse', 'Rick Riordan', 1, 2007), 
('Percy Jackson and The Battle of the Labyrinth', 'Rick Riordan', 1, 2008), 
('Percy Jackson and The Last Olympian', 'Rick Riordan', 1, 2009),
('Belladonna', 'Adalyn Grace', 7, 2022),
('Harry Potter and The Philosopher\'s Stone', 'JK Rowling', 1, 1998), 
('The Hunger Games', 'Suzanne Collins', 3, 2008), 
('Cinder', 'Marissa Meyer', 3, 2011), 
('The Maze Runner', 'James Dashner', 3, 2014), 
('Pride and Prejudice', 'Jane Austen', 6, 1813),
('Dorian Gray', 'Oscar Wilde', 5, 1891),
('It', 'Stephen King', 5, '1986'),
('The Great Gatsby', 'F. Scott Fitzgerald', 2, '1925'),
('Moby-Dick', 'Herman Melville', 4, '1851'),
('People We Meet on Vacation', 'Emily Henry', 6, '2021'),
('Heartstopper', 'Alice Oseman', 8, '2019'),
('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 9, '2011'),
('The Girl with the Dragon Tattoo', 'Stieg Larsson', 10, '2005'),
('I\'m Glad My Mom Died', 'Jennette McCurdy', 11, '2022'),
('Home Body', 'Rupi Kaur', 12, '2020'),
('Milk and honey', 'Rupi Kaur', 12, '2014'),
('The Sun and Her Flowers', 'Rupi Kaur', 12, '2017'),
('The Fault in Our Stars', 'John Green', 13, '2012'),
('The Book Thief', 'Markus Zusak', 13, '2005'),
('The Giver', 'Lois Lowry', 13, '1993'),
('Simon vs. the Homo Sapiens Agenda', 'Becky Albertalli', 13, '2015'),
('Stargirl', 'Jerry Spinelli', 13, '2000'),
('Nimona', 'Noelle Stevenson', 8, '2015'),
('Becoming', 'Michelle Obama', 11, '2018');

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