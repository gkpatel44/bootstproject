import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const ClientReview = () => {
    return (
        <div style={{ color: "black", paddingBottom: "1px", backgroundColor: "#bdbdbd" }}>
        <Container className='my-5' style={{ display: "flex", flexDirection: "column" }} >
          <Row>
            <h1 className='text-center py-3'>Client Review</h1>
            <Col style={{flexWrap: "wrap"}}>
              {/* <Card   className = "my-5 text-center flex-row flex-wrap" style={{ width: '18rem' }}> */}
              <Card.Img variant="center" width="80%" height="280px" src="https://source.unsplash.com/random/286×180/?teacher" />
            </Col >
            <Col>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
  
        <Container className='my-5'>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              {/* </Card> */}
            </Col>
  
            <Col>
              {/* <Card   className = "my-5 text-center flex-row flex-wrap" style={{ width: '18rem' }}> */}
              <Card.Img variant="center" width="80%" height="280px" src="https://source.unsplash.com/random/286×180/?ladies" />
            </Col >
  
          </Row>
        </Container>
  
        <Container className='my-5'>
          <Row>
            <Col>
              {/* <Card   className = "my-5 text-center flex-row flex-wrap" style={{ width: '18rem' }}> */}
              <Card.Img variant="center" width="80%" height="280px" src="https://source.unsplash.com/random/286×180/?professor" />
            </Col >
            <Col>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
  
      </div>
    )
}

export default ClientReview
