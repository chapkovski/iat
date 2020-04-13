
import React from "react";
import '../sass/errorSign.scss'
const ErrorSign = ({ show }) => {
    console.debug('SHOW::::', show);
    const displayClass = show ? 'errorSign' : 'noShow';
    if (show) {
        return (
            <div className={displayClass} style={{ display: show}} >
                <img src="https://o.remove.bg/downloads/042cdd79-ef57-4108-9188-d4ba30c7d239/orange-x-sign-clip-art-png-clip-art-removebg-preview.png" alt="" height='200px' />
            </div>
        )
    } else { return null }
}
export default ErrorSign 