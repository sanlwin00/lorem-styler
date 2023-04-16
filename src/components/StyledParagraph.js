import React from 'react';

// split input text into words and wrap each matching word with styled span tag
const StyledParagraph = ({ paragraph, underlineWords, boldWords, highlightWords }) => {
  const getStyledWords = (text) => {
    return text.split(' ').map((word) => {
        //to compare words without punctuation or symbols
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '');
        let style = '';

        if (underlineWords.includes(cleanedWord)) {
            style += ' underline';
        }
        if (boldWords.includes(cleanedWord)) {
            style += ' bold';
        }
        if (highlightWords.includes(cleanedWord)) {
            style += ' highlight';
        }

        return style ? `<span class="${style.trim()}">${word}</span>` : word;
    });
  };

  const renderStyledParagraph = () => {
        const styledParagraph = getStyledWords(paragraph).join(' ');
        return { __html: styledParagraph };
  };

  return <p dangerouslySetInnerHTML={renderStyledParagraph()} />;
};

export default StyledParagraph;
