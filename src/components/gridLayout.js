import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GridLayout() {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={4} sm={12}>
          <div className="p-3 bg-primary text-white">This column takes 4/12 columns on big screens</div>
        </Col>
        <Col md={4} sm={12}>
          <div className="p-3 bg-success text-white">The navbar shows a hamburger menu on small screens</div>
        </Col>
        <Col md={4} sm={12}>
          <div className="p-3 bg-warning text-white">This is column 3 in the first row</div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} sm={12}>
          <div className="p-3 bg-info text-white">This is column 1 of 2</div>
        </Col>
        <Col md={6} sm={12}>
          <div className="p-3 bg-secondary text-white">This is column 2 of 2</div>
        </Col>
      </Row>
    </Container>
  );
}

export default GridLayout;