import React from 'react';

import BookCard from './BookCard';

function BooksPanel({ user }) {
  const books = user.books;

  const displayBooks = books.map(book => {
    return (
      <BookCard key={book.id} book={book} />
    );
  })

  return (
    <div>
      {displayBooks}
    </div>
  );
}

export default BooksPanel;
