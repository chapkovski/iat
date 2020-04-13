// renders footer
import React, { useState, useEffect, useContext } from "react";
import Side from './side'
import _ from 'lodash';
import { useSelector, useDispatch } from "react-redux";
import Q from './q'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import ParamsContext from '../context'
import useKeyDown from './useKeyListener'
import { getTime } from 'date-fns'
import { increaseCurrentQ, addAnswer } from '../redux/actions'
import ErrorSign from './errorSign'

import '../sass/main.scss'
const Main = () => {
    const { data, leftKey, rightKey } = useContext(ParamsContext);
    const dispatch = useDispatch();
    const [error, setError] = useState(false)
    const pointer = useSelector((state) => state.pointer);
    const [currentQuestion, setCurrentQuestion] = useState(data[pointer]);
    useEffect(() => {
        const currentData = data[pointer]
        setCurrentQuestion({ ...currentData, timeShown: getTime(new Date()) })
    }, [pointer, data])
    useEffect(() => {
        const currentData = data[pointer]
        setCurrentQuestion({ ...currentData, timeShown: getTime(new Date()) })
    }, [])
    const [leftBlink, setLeftBlink] = useState(false);
    const [rightBlink, setRightBlink] = useState(false);
    const letter = useKeyDown();
    const tempToggle = async (toggler, firstState, lastState) => {
        toggler(firstState);
        await setTimeout(() => {
            toggler(lastState);
        }, 500);
    };

    useEffect(() => {
        const answer = letter.answer
        const currentBelongs = currentQuestion.body.belongs;
        const allowedAnswers = ['left', 'right']
        switch (answer) {
            case 'left':

                tempToggle(setLeftBlink, true, false);
                break;
            case 'right':
                tempToggle(setRightBlink, true, false);
                break;
            default:
                ;
        }
        if (allowedAnswers.includes(answer)) {
            if (answer === currentBelongs) {
                setError(false);
                dispatch(addAnswer({ ...currentQuestion, timeAnswered: getTime(new Date()) }))
                dispatch(increaseCurrentQ())

            } else {
                tempToggle(setError, true, false)
            }
        }


    }, [letter])
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Alert>Press '{leftKey}' for</Alert>
                    <Side blink={leftBlink} data={currentQuestion.left} sideName='left' />
                </Col>
                <Col className='central'>
                    {error && <ErrorSign show={error} />}
                    <Q data={currentQuestion.body} />
                </Col>
                <Col>
                <Alert>Press '{rightKey}' for</Alert>
                    <Side blink={rightBlink} data={currentQuestion.right} sideName='right' />
                </Col>
            </Row>
        </Container>
    )
}
export default Main