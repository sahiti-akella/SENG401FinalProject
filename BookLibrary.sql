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
('Young Adult'),
('Historical Fiction');

-- BOOKS IN THE DATABASE
DROP TABLE IF EXISTS BOOKS;
CREATE TABLE BOOKS (
    Book_ID int not null AUTO_INCREMENT,
    Title varchar(100),
    Author varchar(100),
    Genre_ID int,
    Year_Made int,
    ImageURL varchar(500),
    PRIMARY KEY (Book_ID),
    FOREIGN KEY (Genre_ID) REFERENCES GENRES(Genre_ID)
);

INSERT INTO BOOKS(Title, Author, Genre_ID, Year_Made, ImageURL)
VALUES 
('Percy Jackson and The Lightning Thief', 'Rick Riordan', 1, 2005, 'https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg'), 
('Percy Jackson and The Sea of Monsters', 'Rick Riordan', 1, 2006, 'https://m.media-amazon.com/images/I/91YMTyxpWLL._AC_UF1000,1000_QL80_.jpg'), 
('Percy Jackson and The Titans Curse', 'Rick Riordan', 1, 2007, 'https://m.media-amazon.com/images/I/91hoxANnY9L._AC_UF1000,1000_QL80_.jpg'), 
('Percy Jackson and The Battle of the Labyrinth', 'Rick Riordan', 1, 2008, 'https://m.media-amazon.com/images/I/91w8ZRcW75L._AC_UF1000,1000_QL80_.jpg'), 
('Percy Jackson and The Last Olympian', 'Rick Riordan', 1, 2009, 'https://m.media-amazon.com/images/I/91f6FyULwCL._AC_UF1000,1000_QL80_.jpg'),
('Belladonna', 'Adalyn Grace', 7, 2022, 'https://m.media-amazon.com/images/I/81JeFDiENcL._AC_UF1000,1000_QL80_.jpg'),
('Harry Potter and The Philosopher\'s Stone', 'JK Rowling', 1, 1998, 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg'), 
('The Hunger Games', 'Suzanne Collins', 3, 2008, 'https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg' ), 
('Cinder', 'Marissa Meyer', 3, 2011, 'https://m.media-amazon.com/images/I/81WbBVgtVNL._AC_UF1000,1000_QL80_.jpg' ), 
('The Maze Runner', 'James Dashner', 3, 2014, 'https://m.media-amazon.com/images/I/91Jra1QAMPL._AC_UF1000,1000_QL80_.jpg'), 
('Pride and Prejudice', 'Jane Austen', 6, 1813, 'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg'),
('Dorian Gray', 'Oscar Wilde', 5, 1891, 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625587534/the-picture-of-dorian-gray-9781625587534_hr.jpg'),
('It', 'Stephen King', 5, 1986, 'https://m.media-amazon.com/images/I/71oWFPril4L._AC_UF1000,1000_QL80_.jpg'),
('The Great Gatsby', 'F. Scott Fitzgerald', 2, 1925, 'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg'),
('Moby-Dick', 'Herman Melville', 4, 1851, 'https://m.media-amazon.com/images/I/610qaD5PskL._AC_UF1000,1000_QL80_.jpg' ),
('People We Meet on Vacation', 'Emily Henry', 6, 2021, 'https://m.media-amazon.com/images/I/71WsX3abgiL._AC_UF1000,1000_QL80_.jpg'),
('Heartstopper', 'Alice Oseman', 8, 2019, 'https://m.media-amazon.com/images/I/81v7ORMps6L._AC_UF1000,1000_QL80_.jpg'),
('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 9, 2011, 'https://m.media-amazon.com/images/I/61ZKK6Y1nFL._AC_UF1000,1000_QL80_.jpg'),
('The Girl with the Dragon Tattoo', 'Stieg Larsson', 10, 2005, 'https://m.media-amazon.com/images/I/51YZzF8O7HL._AC_UF1000,1000_QL80_.jpg'),
('I\'m Glad My Mom Died', 'Jennette McCurdy', 11, 2022, 'https://m.media-amazon.com/images/I/71FsU3TjdqL._AC_UF1000,1000_QL80_.jpg'),
('Home Body', 'Rupi Kaur', 12, 2020, 'https://m.media-amazon.com/images/I/71cA1NMiI5L._AC_UF1000,1000_QL80_.jpg'),
('Milk and honey', 'Rupi Kaur', 12, 2014, 'https://m.media-amazon.com/images/I/71Eq55V2AvL._AC_UF1000,1000_QL80_.jpg'),
('The Sun and Her Flowers', 'Rupi Kaur', 12, 2017, 'https://m.media-amazon.com/images/I/71Wt6UPKr7L._AC_UF1000,1000_QL80_.jpg'),
('The Fault in Our Stars', 'John Green', 13, 2012, 'https://m.media-amazon.com/images/I/61fbVx3W5cL._AC_UF1000,1000_QL80_.jpg'),
('The Book Thief', 'Markus Zusak', 13, 2005, 'https://cdn.kobo.com/book-images/098f3fde-196b-4e37-96e4-b2445cd31321/1200/1200/False/the-book-thief-1.jpg'),
('The Giver', 'Lois Lowry', 13, 1993, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1342493368i/3636.jpg'),
('Simon vs. the Homo Sapiens Agenda', 'Becky Albertalli', 13, 2015, 'https://m.media-amazon.com/images/I/915Hg0EpqfL._AC_UF1000,1000_QL80_.jpg'),
('Stargirl', 'Jerry Spinelli', 13, 2000, 'https://m.media-amazon.com/images/I/71GxjoAYJHL._AC_UF1000,1000_QL80_.jpg'),
('Nimona', 'Noelle Stevenson', 8, 2015, 'https://m.media-amazon.com/images/I/51GIzHtjBqL._AC_UF1000,1000_QL80_.jpg'),
('Becoming', 'Michelle Obama', 11, 2018, 'https://m.media-amazon.com/images/I/81jfDTSLQ9L._AC_UF1000,1000_QL80_.jpg'),
('We Were Liars', 'E. Lockhart', 2, 2014, 'https://m.media-amazon.com/images/I/71+tuHzXknL._AC_UF1000,1000_QL80_.jpg'),
('Divergent', 'Veronica Roth', 3, 2011, 'https://m.media-amazon.com/images/I/91oNu+R7EUL._AC_UF1000,1000_QL80_.jpg'),
('Insurgent', 'Veronica Roth', 3, 2012, 'https://m.media-amazon.com/images/I/61DdmGCbbBL._AC_UF1000,1000_QL80_.jpg'),
('Allegiant', 'Veronica Roth', 3, 2013, 'https://m.media-amazon.com/images/I/91UojRVuHKL._AC_UF1000,1000_QL80_.jpg'),
('The Invisible Life of Addie Larue', 'V. E. Schwab', 1, 2020, 'https://m.media-amazon.com/images/I/91Ql48Y0mqL._AC_UF1000,1000_QL80_.jpg'),
('The Inheritance Games', 'Jennifer Lynn Barnes', 7, 2020, 'https://m.media-amazon.com/images/I/91oB1gHuiIL._AC_UF1000,1000_QL80_.jpg'),
('The Hawthorne Legacy', 'Jennifer Lynn Barnes', 7, 2021, 'https://m.media-amazon.com/images/I/81BwjoiEkuL._AC_UF1000,1000_QL80_.jpg'),
('The Final Gambit', 'Jennifer Lynn Barnes', 7, 2022, 'https://m.media-amazon.com/images/I/91bgAVuRzFL._AC_UF1000,1000_QL80_.jpg'),
('The Brothers Hawthorne', 'Jennifer Lynn Barnes', 7, 2023, 'https://m.media-amazon.com/images/I/91jXTr5kePL._AC_UF1000,1000_QL80_.jpg'),
('To Kill a Mockingbird', 'Harper Lee', 10, 1960, 'https://m.media-amazon.com/images/I/51p12agL5LL.jpg'),
('The Housemaid', 'Freida McFadden', 10, 2023, 'https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_UF1000,1000_QL80_.jpg'),
('All The Light We Cannot See', 'Anthony Doerr', 14, 2014, 'https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UF1000,1000_QL80_.jpg'),
('Gone with the Wind', 'Margaret Mitchell', 14, 1936, 'https://m.media-amazon.com/images/I/91w1IHrUqZL._AC_UF1000,1000_QL80_.jpg'),
('I Am Number Four', 'Pittacus Lore', 3, 2010, 'https://m.media-amazon.com/images/I/81MAe5Qp-9L._AC_UF1000,1000_QL80_.jpg'),
('The Power of Six', 'Pittacus Lore', 3, 2011, 'https://m.media-amazon.com/images/I/81qMm+Y-euL._AC_UF1000,1000_QL80_.jpg'),
('The Rise of Nine', 'Pittacus Lore', 3, 2012, 'https://m.media-amazon.com/images/I/71DeqtR-baL._AC_UF1000,1000_QL80_.jpg'),
('The Fall of Five', 'Pittacus Lore', 3, 2013, 'https://m.media-amazon.com/images/I/91RDx0pZ8cL._AC_UF350,350_QL50_.jpg'),
('The Revenge of Seven', 'Pittacus Lore', 3, 2014, 'https://m.media-amazon.com/images/I/71Azrthm5PL._AC_UF1000,1000_QL80_.jpg'),
('The Fate of Ten', 'Pittacus Lore', 3, 2016, 'https://m.media-amazon.com/images/I/91qhLUdRl5L._AC_UF1000,1000_QL80_.jpg'),
('Among The Free', 'Margaret Peterson Haddix', 3, 2006, 'https://m.media-amazon.com/images/I/618zYzBKw8L._AC_UF1000,1000_QL80_.jpg'),
('The Breadwinner', 'Deborah Ellis', 2, 2000, 'https://m.media-amazon.com/images/I/719cTCBHW1L._AC_UF1000,1000_QL80_.jpg'),
('The Giving Tree', 'Shel Silverstein', 2, 1964, 'https://m.media-amazon.com/images/I/71wiGMKadmL._AC_UF1000,1000_QL80_.jpg'),
('The Perks of Being a Wallflower', 'Stephen Chbosky', 13, 1999, 'https://m.media-amazon.com/images/I/61KSi8OvgVL._AC_UF1000,1000_QL80_.jpg'),
('November 9', 'Colleen Hoover', 6, 2015, 'https://m.media-amazon.com/images/I/71RBpTJkKaL._AC_UF1000,1000_QL80_.jpg'),
('It Ends with Us', "Colleen Hoover", 6, 2016, 'https://m.media-amazon.com/images/I/813aV273-rL._AC_UF1000,1000_QL80_.jpg'),
('Things We Never Got Over', 'Lucy Score', 11, 2022, 'https://m.media-amazon.com/images/I/81WklxcuSZL._AC_UF1000,1000_QL80_.jpg'),
('Before we were strangers', 'Renée Carlino', 6, 1989, 'https://m.media-amazon.com/images/I/41PyYpmn8vL.jpg'),
('Paper Towns', 'John Green', 7, 2008, 'https://m.media-amazon.com/images/I/81WBJQUEFsL._AC_UF1000,1000_QL80_.jpg'),
('Lord of the Flies', 'William Golding', 13, 1954, 'https://m.media-amazon.com/images/I/61p1CcekGxL._AC_UF1000,1000_QL80_.jpg'),
('At the Mountains of Madness', 'H. P. Lovecraft', 5, 1936, 'https://m.media-amazon.com/images/I/61NTngHHDVL._AC_UF1000,1000_QL80_.jpg'),
('Watchmen', 'Alan Moore', 8, 1987, 'https://m.media-amazon.com/images/I/71ztkXHWZaL._AC_UF1000,1000_QL80_.jpg'),
('One Hundred Years of Solitude', 'Gabriel García Márquez', 1, 1967, 'https://m.media-amazon.com/images/I/81MI6+TpYkL._AC_UF1000,1000_QL80_.jpg'),
('A Clockwork Orange', 'Anthony Burgess', 5, 1962, 'https://m.media-amazon.com/images/I/61rZCYUYXuL._AC_UF1000,1000_QL80_.jpg'),
('Powerless', 'Lauren Roberts', 13, 2023, 'https://m.media-amazon.com/images/I/81XbnexD2QL._AC_UF1000,1000_QL80_.jpg');

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