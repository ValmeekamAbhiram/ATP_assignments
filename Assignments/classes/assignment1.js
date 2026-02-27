/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The  ", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/


class Book{
    title;
    author;
    pages;
    isAvailable=true
    //constructor
    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages

    }
//borrow() - Marks the book as not available
    borrow(title){
        if(this.title===title && this.isAvailable){
            this.isAvailable=false
        }
        return "Book borrowed successfully"
    }

//returnBook() - Marks the book as available
    returnBook(title){
        if(this.title===title&&!this.isAvailable){
            this.isAvailable=true
        }
        return "Book returned successfully"
    }

//getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
    getInfo(title){
        return `"The ${this.title} by ${this.author} (${this.pages})"`
    }

//isLongBook() - Returns true if pages > 300, false otherwise
    isLongBook(title){
        if(this.title===title && this.pages>=300){
        return true
        }
        return false
    }

}

let book1=new Book('Harry Porter','Someone',250)
let book2=new Book('1984','someone',290)
let book3=new Book('Hobbit','SomeOne',350)

book1.borrow('Harry Porter')
console.log(book1.getInfo('Harry Porter'))