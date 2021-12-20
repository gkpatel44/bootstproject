import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#343a40" ,color:"white"}}>
      <Container>
        <Row>
          <Col>
            <p style={{ float: "left" }}>© 2017-2018 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            <p style={{ float: "right" }}><a href="#">Back to top</a></p>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default Footer
