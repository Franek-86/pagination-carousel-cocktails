import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const PlaceHolder = () => {
  return (
    <Container fluid>
      <Card className='my-3 g-0'>
        <Row>
          <Col sm={4}>
            <Card.Img
              variant='top'
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src='https://placehold.jp/c4c4c4/ffffff/150x150.png?text=%20'
            />
          </Col>
          <Col sm={8}>
            <Card.Body>
              <Placeholder as={Card.Title} animation='glow'>
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={7} /> <Placeholder xs={4} />
                <Placeholder xs={4} /> <Placeholder xs={6} />
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={11} />
                <Placeholder xs={11} />
                <Placeholder xs={11} />
              </Placeholder>
            </Card.Body>
            <Card.Body>
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={3} /> <Placeholder xs={3} />{" "}
              </Placeholder>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PlaceHolder;
