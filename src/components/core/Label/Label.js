import React from 'react';
import styles from './Label.scss';

const Label = ({ children, className }) => {
    return (
        <span className={className}>
            {children}
        </span>
    )
};

export default Label;
