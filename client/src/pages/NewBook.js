import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Error, FormField, Input, Label, Textarea } from '../styles';

function NewBook({ user }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch('/api/books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => {
        setIsLoading(false);
        if (r.ok) {
          history.push("/");
        } else {
          r.json().then(err => setErrors(err.errors));
        }
      });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor='title'>Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor='author'>Author</Label>
            <Input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id="description"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color='primary' type='submit'>
              {
                isLoading
                ? "Loading..."
                : "Add Book"
              }
            </Button>
          </FormField>
          <FormField>
            {
              errors.map(err => (
                <Error key={err}>{err}</Error>
              ))
            }
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <p>{description}</p>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewBook;
