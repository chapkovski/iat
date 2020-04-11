// renders footer
import React, { useState, useEffect, useRef, useContext } from "react";
import Left from './left'
import Right from './right'
import Q from './q'
import {Container, Row, Col} from 'react-bootstrap'
import ParamsContext from '../params'
const Main = () => {
    const params = useContext(ParamsContext);
    console.log(params)
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
export default Main