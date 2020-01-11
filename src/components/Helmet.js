import React from 'react';

import Helmet from 'react-helmet';
import Logo from '../../assets/images/logo.png';

export default () => (
    <Helmet>
        <link rel='icon' href={Logo} />
    </Helmet>
)