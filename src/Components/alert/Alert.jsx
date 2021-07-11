import React, { useEffect } from 'react';

const Alert = ({ alert, removeAlert }) => {
    const { message, type } = alert;

    useEffect(() => {
        const setTime = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => {
            clearTimeout(setTime);
        };
    }, [removeAlert]);

    return (
        <div className="alert">
            <p className={`alert--${type}`}>{message}</p>
        </div>
    );
};

export default Alert;
