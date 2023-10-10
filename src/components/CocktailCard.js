import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Placeholder } from "react-bootstrap";

const CocktailCard = ({ currentDrinks }) => {
  return (
    <section className='cocktail-section'>
      <Container>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {currentDrinks &&
            currentDrinks.map((item) => {
              const {
                idDrink,
                strInstructions,
                strDrink,
                strDrinkThumb: img,
                strGlass: glass,
              } = item;
              return (
                <Link to={`/drink-num-${idDrink}`} key={idDrink}>
                  <Col>
                    <Card>
                      <Card.Img
                        variant='top'
                        src={img}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <Card.Body>
                        <Card.Title>{strDrink}</Card.Title>
                        <Card.Text
                          style={{ height: "5rem", overflow: "scroll" }}
                        >
                          {strInstructions}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};

export default CocktailCard;
