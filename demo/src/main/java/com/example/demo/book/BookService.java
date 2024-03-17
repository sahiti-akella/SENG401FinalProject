package com.example.demo.book;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    public List<Book> getBooks() {
		return List.of(new Book(1, "some book", "some author", 3, 2004));
	}
}
