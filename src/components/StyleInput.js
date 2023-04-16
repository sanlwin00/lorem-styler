import React from 'react';
import { Form } from 'react-bootstrap';

const StyleInput = ({ label, value, onChange }) => {
  return (
    <Form.Group className="style-input">
      <Form.Label className='text-muted'>{label}</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default StyleInput;
