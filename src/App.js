import './App.css';
import React, { useState } from 'react';
import StyleInput from './components/StyleInput';
import StyledParagraph from './components/StyledParagraph';

const App = () => {

  // state variables to store styled words accordingly.
  const [underlineWords, setUnderlineWords] = useState([]);
  const [boldWords, setBoldWords] = useState([]);
  const [highlightWords, setHighlightWords] = useState([]);

  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam odio ut sapien mollis hendrerit. Fusce in lectus ex. In hac habitasse platea dictumst. Duis aliquam sed arcu at sagittis.`;

  return (
    <div className="App">
      <header className="App-header">        
        <h1>Lorem Styler</h1>    
      <StyleInput
        label="Type to underline:"
        value={underlineWords.join(' ')}
        onChange={(e) => setUnderlineWords(e.target.value.split(' '))}
      />
      <StyleInput
        label="Type to bold:"
        value={boldWords.join(' ')}
        onChange={(e) => setBoldWords(e.target.value.split(' '))}
      />
      <StyleInput
        label="Type to highlight:"
        value={highlightWords.join(' ')}
        onChange={(e) => setHighlightWords(e.target.value.split(' '))}
      />
      <StyledParagraph
          paragraph={paragraph}
          underlineWords={underlineWords}
          boldWords={boldWords}
          highlightWords={highlightWords}
        />
	  </header>
    </div>
  );
};

export default App;
