import { useState, useContext } from "react";
import useEventListener from "@use-it/event-listener";
import ParamsContext from '../params'

export const useKeyDown = () => {
    const params = useContext(ParamsContext);
    console.log("AAAAA", params)
    const [letter, setLetter] = useState("");
    useEventListener("keydown", ({ key }) => {
        setLetter(key);
    });
    return letter;
};

