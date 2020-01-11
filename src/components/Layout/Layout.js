import React from 'react';
import Styles from './Layout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Helmet from '../Helmet';

export default ({ children }) => {
    return (
        <>
            <Helmet />
            <Header />
            <div className={Styles.Children}>
                {children}
            </div>
            <Footer />
        </>
    )
}