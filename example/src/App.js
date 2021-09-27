import React from 'react'

import { Col, Container, Row } from 'thangved-react-grid'
import 'thangved-react-grid/dist/index.css'

const App = () => {
  return (
    <Container wide>
      <Row>
        <Col lg='4' md='6' sm='12'>Hello</Col>
        <Col lg='4' md='6' sm='12'>Hello</Col>
        <Col lg='4' md='6' sm='12'>Hello</Col>
      </Row>
    </Container>
  )
}

export default App
