import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import StyleInput from './components/StyleInput';
import StyledParagraph from './components/StyledParagraph';

const App = () => {
  const [underlineWords, setUnderlineWords] = useState([]);
  const [boldWords, setBoldWords] = useState([]);
  const [highlightWords, setHighlightWords] = useState([]);

  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam odio ut sapien mollis hendrerit. ` 
                    + `Fusce in lectus ex. In hac habitasse platea dictumst. Duis aliquam sed arcu at sagittis. Pellentesque suscipit elit a elit dignissim, `
                    + `ornare mattis libero convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in dictum augue, `
                    + `nec consectetur enim. Pellentesque quis quam ultricies, volutpat nulla sit amet, egestas est. `
                    + `Praesent accumsan ante non dui sollicitudin convallis. Etiam facilisis finibus lectus, euismod gravida ipsum ultricies at.`;

  return (    
    <Container className="my-5 p-4 bg-light text-center rounded">     
    <Card className="mb-5" bg="secondary" text="white">          
          <Card.Body>
            <Card.Title>Lorem Styler</Card.Title>
            <Card.Text>
              A simple React app that styles the words in a paragraph as you type.
            </Card.Text>
          </Card.Body>
        </Card>         
      <Row>
        <Col>
          <StyleInput
            label="Type here to underline:"
            value={underlineWords.join(' ')}
            onChange={(e) => setUnderlineWords(e.target.value.split(' '))}
          />
        </Col>
        <Col>
          <StyleInput
            label="Type here to bold:"
            value={boldWords.join(' ')}
            onChange={(e) => setBoldWords(e.target.value.split(' '))}
          />
        </Col>
        <Col>
          <StyleInput
            label="Type here to highlight:"
            value={highlightWords.join(' ')}
            onChange={(e) => setHighlightWords(e.target.value.split(' '))}
          />
        </Col>
      </Row>
      <StyledParagraph
        paragraph={paragraph}
        underlineWords={underlineWords}
        boldWords={boldWords}
        highlightWords={highlightWords}
      />
      <p className='text-muted'><small>Tips: You may even enter the same word into all the text boxes to apply multiple styles.</small></p>
    </Container>
  );
};

export default App;
