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
import { setCurrentQuestion } from '../redux/actions'
const Main = () => {
    const { data } = useContext(ParamsContext);
    const dispatch = useDispatch();
    const pointer = useSelector((state) => state.pointer);
    const currentQuestion = useSelector((state) => state.currentQuestion);
    useEffect(() => {
        const currentData = data[pointer]
        dispatch(setCurrentQuestion({ ...currentData, timeShown: getTime(new Date()) }))
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
                <Col><Side blink={leftBlink} data={currentQuestion.left} sideName='left' />   </Col>
                <Col><Q data={currentQuestion.body} />  </Col>
                <Col><Side blink={rightBlink} data={currentQuestion.right} sideName='right' /></Col>
            </Row>
        </Container>
    )
}
export default Main