// renders footer
import React, { useState, useEffect, useRef } from "react";
import useTimeout from 'use-timeout'
import Elem from './elem';
import '../sass/sides.scss'


const Left = () => {
    const [blinkClass, setBlinkClass] = useState('blink_me')
    useTimeout(() => setBlinkClass(''), 1000)
    return (
        <div className={blinkClass}>
            <Elem />
        </div>
    )
}
export default Left