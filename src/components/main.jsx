// renders footer
import React, { useState, useEffect, useContext, useReducer } from "react";
import Side from './side'
import _ from 'lodash';
import { useSelector, useDispatch } from "react-redux";
import Q from './q'
import { Container, Row, Col } from 'react-bootstrap'
import ParamsContext from '../context'
import useKeyDown from './useKeyListener'
import { getTime } from 'date-fns'
import { addQuestion } from '../redux/actions'
const Main = () => {
    const { data } = useContext(ParamsContext);
    const dispatch = useDispatch();
    const [currentQ, setCurrentQ] = useState({});
    const pointer = useSelector((state) => state.pointer);
    const storedQ = useSelector((state) => state.currentQuestion);
    useEffect(() => {
        if (storedQ && storedQ.id) { setCurrentQ(_.find(data, { id: storedQ.id })) } else {
            setCurrentQ(data[pointer])
            dispatch(addQuestion({ id: data[pointer].id, time_shown: getTime(new Date()) }))
        }

    }, [])
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
                tempToggle(setLeftBlink, true, false);
                break;
            case 'right':
                tempToggle(setRightBlink, true, false);
                break;
            default:
                return;
        }

    }, [letter])
    return (
        <Container fluid>
            <Row>
                <Col><Side blink={leftBlink} data={currentQ.left} />   </Col>
                <Col><Q data={currentQ.body} />  </Col>
                <Col><Side blink={rightBlink} data={currentQ.right} /></Col>
            </Row>
        </Container>
    )
}
export default Main