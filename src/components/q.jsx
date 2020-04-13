// renders footer
import React  from "react";
import Alert from 'react-bootstrap/Alert'
const Q = ({data})=>{
    console.log('DATA', data)
    const text = (data && data.text)? data.text: ''
    return (
        <Alert variant='primary'>{text}</Alert>
    )
}
export default Q