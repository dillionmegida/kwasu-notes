import React from 'react';
import './Footer.module.css';

import kwasu from '../../kwasu/details';

export default () => (
    <footer>
        <p>Copyright {new Date().getFullYear()}</p>
        <p>
            <em>Designed by&nbsp;
                <a href={kwasu.creator.web} title='Dillion on Twitter'>
                    Dillion Megida
                </a>
            </em>
        </p>
    </footer>
)