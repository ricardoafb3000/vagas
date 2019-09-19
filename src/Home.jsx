import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';
import "./assets/css/bootstrap.min.css";


export default () => pug`
  Container
    Row
      .col-6.
        half blink
      .col-6. 
        Second half blink
`;
