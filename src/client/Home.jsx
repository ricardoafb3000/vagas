import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Home.css';

export default (props) => 
<Container>
  <Row>
    <Col>
      <Button color="success" onClick={(e) => props.history.push("/sec")}>Got to Sec</Button>
    </Col>
    <Col>
    </Col>
  </Row>
</Container>
