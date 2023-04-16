import React from 'react';
import { Container } from 'react-bootstrap';

// split input text into words and wrap each matching word with styled span tag 
const StyledParagraph = ({ paragraph, underlineWords, boldWords, highlightWords }) => {
  const getStyledWords = (text) => {
    return text.split(' ').map((word) => {
      // to compare words without punctuation or symbols
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
      let style = '';

      if (underlineWords.includes(cleanedWord)) {
        style += ' text-decoration-underline';
      }
      if (boldWords.includes(cleanedWord)) {
        style += ' fw-bold';
      }
      if (highlightWords.includes(cleanedWord)) {
        style += ' text-danger';
      }

      return style ? `<span class="${style.trim()}">${word}</span>` : word;
    });
  };

  const renderStyledParagraph = () => {
    let styledParagraph = paragraph;
    styledParagraph = getStyledWords(styledParagraph).join(' ');

    return { __html: styledParagraph };
  };

  return (
    <Container className='my-5'>
      <p dangerouslySetInnerHTML={renderStyledParagraph()} />
    </Container>
  );
};

export default StyledParagraph;
