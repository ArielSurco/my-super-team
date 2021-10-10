import { useLayoutEffect } from 'react';
import './Alert.css'

const selectType = type => {
    switch(type) {
        case 'success':
            return 'bg-success';
        case 'error':
            return 'bg-danger';
        default:
            return null;
    }
}

const Alert = ({message, type, removeError}) => {
    useLayoutEffect(() => {
        setTimeout(() => {
            removeError(message);
        }, 5000)
    })

    return (
        <div className={`alert d-flex align-items-center justify-content-between fixed-bottom m-0 ${selectType(type)}`}>
            <p className="alert__text fs-3 fw-normal">
                {message}
            </p>
            <button className="alert__btn" onClick={() => removeError(message)}>
                <i className="btn__clear"></i>
            </button>
        </div>
    )
}

export { Alert };