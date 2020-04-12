// renders footer
import React, { useState, useEffect, useRef, useContext } from "react";
import Side from './side'
 
import Q from './q'
import {Container, Row, Col} from 'react-bootstrap'
import ParamsContext from '../params'
import useKeyDown from './useKeyListener'
const Main = () => {
    const params = useContext(ParamsContext);
    const letter = useKeyDown()
    useEffect(()=>{console.log("KEY PRESSED", letter)},[letter])
    return (
        <Container fluid>
            <Row>
                <Col><Side/>   </Col>
                <Col><Q/>  </Col>
                <Col><Side/></Col>
            </Row>
        </Container>
    )
}
export default Main