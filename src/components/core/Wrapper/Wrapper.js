import React from 'react';
import styles from './Wrapper.scss';

const Wrapper = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default Wrapper;
