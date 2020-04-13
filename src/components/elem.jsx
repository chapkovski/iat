// renders footer
import React from "react";
import Alert from 'react-bootstrap/Alert'
const elem = ({ children }) => {
    return (
        <Alert variant='danger'>{children}</Alert>
    )
}
export default elem