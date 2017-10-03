export const booksByShelf = (books,shelf) =>
  books.filter(book => book.shelf === shelf)

export const titleize = (string) =>
  string
  //replace function to remove camel casing if it exists
    .replace(/([A-Z])/g, ' $1')
    // replaces all results to uppercase
    .replace(/^,/, function(str){ return str.toUpperCase(); })
