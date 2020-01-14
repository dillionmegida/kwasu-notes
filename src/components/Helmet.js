import React from 'react';

import { Helmet } from 'react-helmet';
import Logo from '../../assets/images/logo.png';

export default props => (
    <Helmet>
        <html lang="en" />
        <link rel='icon' href={Logo} />
        <title> 
            {props.pageTitle}
        </title>

        <meta name='description' content={props.pageDescription} />
        <meta name="keywords" content="kwasu notes, kwasu" />
        <meta name='author' content='Dillion Megida' />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="darkslategrey" />
    </Helmet>
)