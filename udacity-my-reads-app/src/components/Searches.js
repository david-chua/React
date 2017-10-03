import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//COMPONENTS

import { search } from './BooksAPI';
import BookList from './BookList';


const Empty_Search = "No books found";
// adds a shelf/category to the book so it can be updated in the database so it shows in the right category
const addShelfToBook = (categorizedBooks, uncategorizedBooks) => {
  const shelfLookup =
    categorizedBooks.reduce((acc, book) => ({ ...acc, [book.id]: book.shelf }), {});
  return uncategorizedBooks.map(book => ({ ...book, shelf: shelfLookup[book.id] }));
};

export default class SearchBook extends Component{
  state = {
    books: [],
    error: '',
    query: ''
  }

  static propTypes = {
    categorizedBooks: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
// allows our searches to be updated as we type
  searchBooks(query) {
    this.setState({ query, error: ''});

    if(query.length < 1) {
      this.setState({ books: [] });
      return;
    }

    search(query, 20).then(books => {
      if (Array.isArray(books)){
        this.setState({books });
        return;
      }

      switch(books.error) {
        case Empty_Search:
          this.setState({ error: "No Books found." });
          break;
        default:
          this.setState({ error: books.error });
      }
    });
  }

  render(){
    const { books, error, query } = this.state;
    const { categorizedBooks, shelves, onUpdateBook } = this.props;
    return(

    <div className="search-books">
      <div className="search-book-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => this.searchBooks(e.target.value)} />
        </div>
      </div>
      <div className="search-books-result">
        {error !=='' ? (
          <h2>{error}</h2>
        ) : (
          <BookList
            books={addShelfToBook(categorizedBooks, books)}
            shelves={shelves}
            onUpdateBook={onUpdateBook} />
        )}
        </div>
      </div>
    );
  }
}
