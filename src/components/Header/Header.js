import React from 'react';
import Styles from './Header.module.css';

import Logo from '../../../assets/images/logo.png';
import { Link } from 'gatsby';
import kwasu from '../../kwasu/details';
import NavLinks from '../Nav/NavLinks';

export default () => {
    return (
        <header className={Styles.Header}>
            <Link
                to='/'
                title={`${kwasu.name} Homepage`}
                className={Styles.Kwasu}
            >
                <img src={Logo} alt='School Logo' />
                &nbsp;
                <span className={Styles.SkName}>{kwasu.abbr} Notes</span>
            </Link>
            <nav>
                <NavLinks activeClass={Styles.ActiveClass} />
            </nav>
        </header>
    )
}