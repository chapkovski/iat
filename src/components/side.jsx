// renders footer
import React, { useEffect, } from "react";

import Elem from './elem';
import '../sass/sides.scss'


const Left = ({ blink, data, sideName }) => {
    const elems = (data) ? data : []
    return (
        <div className={`element${blink ? " highlight" : ""}`}>
            {elems.map((i, idx) => (<Elem key={idx}>{i.text}</Elem>))}

        </div>
    )
}
export default Left