import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Box, Button } from '../styles';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then(setBooks);
  }, []);

  return (
    <Wrapper>
      {
        books.length > 0
        ? books.map(book => (
            <Book key={book.id}>
              <Box>

              </Box>
            </Book>
          ))
        : (
            <>
              <h2>No Books Found</h2>
              <Button as={Link} to="/new">
                Add a Book
              </Button>
            </>
          )
      }
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Book = styled.article`
  margin-bottom: 24px;
`;

export default BookList;
