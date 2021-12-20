import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Cards = () => {
    return (
        <Container >
        <Row>
          <Col>
            <Card className="my-5 text-center " style={{ width: '18rem' }}>
              <Card.Img variant="center" className="rounded-circle mx-5" width="200px" height="200px" src="https://source.unsplash.com/random/286×180/?person" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
  
          <Col>
            <Card className="my-5 text-center " style={{ width: '18rem' }}>
              <Card.Img variant="center" className="rounded-circle mx-5" width="200px" height="200px" src="https://source.unsplash.com/random/286×180/?girl" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-5 text-center " style={{ width: '18rem' }}>
              <Card.Img variant="center" className="rounded-circle mx-5" width="200px" height="200px" src="https://source.unsplash.com/random/286×180/?man" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  
    )
}

export default Cards
