import React from 'react';
import styles from './styles.scss';

const Header = ({ children }) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                CITY
                <span className={styles.report}>REPORT</span>
            </div>
            {children}
        </div>
    )
};

export default Header;
