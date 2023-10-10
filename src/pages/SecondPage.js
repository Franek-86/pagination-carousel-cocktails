import React, { useEffect, useRef, useState } from "react";

import { useFetch } from "../utils/useFetch";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col } from "react-bootstrap";
import PlaceHolder from "../components/PlaceHolder";
import { useParams } from "react-router-dom";

const SecondPage = () => {
  const count = useRef(1);
  const { id } = useParams();
  useEffect(() => {
    count.current = count.current + 1;
  });
  console.log("second page", count.current);
  const cocktailId = id.split("-")[2];
  const { data, loading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );

  let array = [];
  let ingredients = {};
  if (data.length > 0) {
    const keyArr = Object.keys(data[0]);
    const filteredKeyArr = keyArr.filter((i) => i.startsWith("strIngredient"));
    console.log(filteredKeyArr);
    const test2 = filteredKeyArr.forEach((i) => {
      if (data[0][i]) {
        array.push([i, data[0][i]]);
      }
    });
    ingredients = Object.fromEntries(array);
  }
  console.log(array);
  console.log(ingredients);

  const check = data.length > 0;
  if (loading) {
    return <PlaceHolder />;
  } else if (error) {
    return <h2>error</h2>;
  } else {
    return (
      <Container fluid>
        <Card className='my-3 g-0'>
          <Row>
            <Col sm={4}>
              <Card.Img
                variant='top'
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src={check ? data[0].strDrinkThumb : undefined}
              />
            </Col>
            <Col sm={8}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                {array.map((i) => {
                  return (
                    <ListGroup.Item>
                      {i[0]}: {i[1]}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
              <Card.Body>
                <Card.Link href='#'>Card Link</Card.Link>
                <Card.Link href='#'>Another Link</Card.Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
};

export default SecondPage;
