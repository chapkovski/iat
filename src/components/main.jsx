// renders footer
import React, { useState, useEffect } from "react";
import Side from './side'

import Q from './q'
import { Container, Row, Col } from 'react-bootstrap'
 
import useKeyDown from './useKeyListener'
const Main = () => {
    const [leftBlink, setLeftBlink] = useState(false);
    const [rightBlink, setRightBlink] = useState(false);
    const letter = useKeyDown();
    const tempToggle = (toggler, firstState, lastState) => {
        toggler(firstState);
        setTimeout(() => {
            toggler(lastState);
        }, 500);
      };

    useEffect(() => {
        const answer = letter.answer
        switch (answer) {
            case 'left':
                tempToggle(setLeftBlink,true, false);
                break;
            case 'right':
                tempToggle(setRightBlink,true, false);
                break;
            default:
                return;
        }

    }, [letter])
    return (
        <Container fluid>
            <Row>
                <Col><Side blink={leftBlink} />   </Col>
                <Col><Q />  </Col>
                <Col><Side blink={rightBlink} /></Col>
            </Row>
        </Container>
    )
}
export default Main