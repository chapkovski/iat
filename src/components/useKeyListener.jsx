import { useState, useContext } from "react";
import useEventListener from "@use-it/event-listener";
import ParamsContext from '../context'
import { getTime } from 'date-fns'
import _ from 'lodash';
const useKeyDown = () => {
    const { left, right } = useContext(ParamsContext);
    const correspondance = { [left]: 'left', [right]: 'right' }
    const [letter, setLetter] = useState('');
    useEventListener("keydown", ({ key }) => {
        if (_.keys(correspondance).includes(key)) {
            setLetter({ answer: correspondance[key], time: getTime(new Date()) })
        };
    })
    return letter;
};
export default useKeyDown

