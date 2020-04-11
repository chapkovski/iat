// renders footer
import React, { useState, useEffect, useRef } from "react";
import Left from './left'
import Right from './right'
import Q from './q'
import {Container, Row, Col} from 'react-bootstrap'
const right = () => {
    return (
        <Container fluid>
            <Row>
                <Col><Left/>   </Col>
                <Col><Q/>  </Col>
                <Col><Right/></Col>
            </Row>
        </Container>
    )
}
export default right