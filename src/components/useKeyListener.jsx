import { useState, useContext } from "react";
import useEventListener from "@use-it/event-listener";
import ParamsContext from '../params'
import { getTime } from 'date-fns'
const useKeyDown = () => {
    const { allowedLetters } = useContext(ParamsContext);
    const [letter, setLetter] = useState();
    useEventListener("keydown", ({ key }) => {
        if (allowedLetters.includes(key)) setLetter({ key: key, time: getTime(new Date()) });
    });
    return letter;
};
export default useKeyDown

