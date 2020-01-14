import React from 'react';
import Styles from './Layout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default ({ children }) => {
    return (
        <>
            <Header />
            <div className={Styles.Children}>
                {children}
            </div>
            <Footer />
        </>
    )
}