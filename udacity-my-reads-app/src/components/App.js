import React, { Component } from 'react';
import {Route } from 'react-router-dom';


//COMPONENTS
import SearchBook from './Searches';
import ListBooks from './ListBooks';
import { getAll, update } from './BooksAPI';


class App extends Component {

  state = {
    books:[],
    shelves: ["currentlyReading", "wantToRead", "read"]
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    getAll().then(books =>
      this.setState({ books })
    );
  }

  updateBook = (book,shelf) => {
    update(book,shelf).then(()=> {
      this.getBooks();
    })
  }

  render() {
    const { books, shelves} = this.state;

    return(
      <div className="app">
        <main className="content">
          <Route exact path="/" render={()=> (
              <ListBooks books={books} shelves={shelves} onUpdateBook={this.updateBook} />
            )} />
          <Route exact path="/search" render={()=> (
              <SearchBook categorizedBooks={books} shelves={shelves} onUpdateBook={this.updateBook} />
            )} />
        </main>
      </div>
    );
}

}

export default App;
