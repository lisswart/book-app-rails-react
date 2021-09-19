import React from 'react';

function BookCard({ book }) {
  return (
    <article>
      {book.title}, by {book.author}
    </article>
  );
}

export default BookCard;
