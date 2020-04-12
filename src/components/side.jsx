// renders footer
import React, { useEffect, } from "react";

import Elem from './elem';
import '../sass/sides.scss'


const Left = ({ blink }) => {
    useEffect(() => { console.debug('BLINK HAS CHANGED') }, [blink])
    return (
        <div className={`element${blink ? " highlight" : ""}`}>
            <Elem />
        </div>
    )
}
export default Left