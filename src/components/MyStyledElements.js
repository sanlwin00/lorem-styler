import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  NavLink,
  Jumbotron,
} from 'react-bootstrap';

export const MyDiv = ({ children, ...props }) => <div {...props}>{children}</div>;

export const MyInput = (props) => <FormControl {...props} />;

export const MyH1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

export const MyP = ({ children, ...props }) => <p {...props}>{children}</p>;

export const MyButton = (props) => <Button {...props} />;

export const MyLink = (props) => <NavLink {...props} />;

export const MyHeroTitle = (props) => <Jumbotron {...props} />;

export const MyRow = (props) => <Row {...props} />;

export const MyCol = (props) => <Col {...props} />;

export const MyCard = (props) => <Card {...props} />;
