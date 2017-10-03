import React from 'react';
import PropTypes from 'prop-types';
import { titleize } from './utils';


// Book prob to layout all the books in the searches
const Book = (props) => {
  const {
    authors,
    id,
    imageLinks: { thumbnail },
    shelf,
    title,
    shelves,
    onUpdateBook
  } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{width: 150, height: 150, backgroundImage: `url(${thumbnail}` }} />
        <div className="book-shelf-changer">
          <select value={shelf} onChange={(e)=> onUpdateBook({ id }, e.target.value)}>
            <option value="none" disabled> Move to...</option>
            {shelves.map(shelf =>
              <option key={shelf} value={shelf}>{titleize(shelf)}</option>
            )};
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(",")}</div>
    </div>
  );
};

Book.defaultProps = {
  authors: [],
  imageLinks: { thumbnail: "http://books.google.com/books/content?id=notfound&printsec=frontcover&img=1&zoom=1&source=gbs_api" },
  shelf: "none"
};

Book.propTypes = {
  info: PropTypes.shape({
    authors: PropTypes.array,
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.object,
    shelf: PropTypes.string,
    title: PropTypes.string.isRequired
  }),
  shelves: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default Book;
