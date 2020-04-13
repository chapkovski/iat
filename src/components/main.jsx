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

import ErrorSign from './errorSign'

import '../sass/main.scss'
const Main = () => {
    const { data } = useContext(ParamsContext);
    const dispatch = useDispatch();
    const [error, setError] = useState(false)
    const pointer = useSelector((state) => state.pointer);
    const [currentQuestion, setCurrentQuestion] = useState(data[pointer]);

    useEffect(() => {
        const currentData = data[pointer]
        setCurrentQuestion({ ...currentData, timeShown: getTime(new Date()) })
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
        const currentBelongs = currentQuestion.body.belongs;
        console.debug('CURRENT BELONING', currentBelongs)
        if (answer !== currentBelongs) { tempToggle(setError, true, false) }
        switch (answer) {
            case 'left':
                console.debug(currentQuestion);
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
                <Col className='central'>
                    {error && <ErrorSign />}
                    <Q data={currentQuestion.body} />
                </Col>
                <Col><Side blink={rightBlink} data={currentQuestion.right} sideName='right' /></Col>
            </Row>
        </Container>
    )
}
export default Main