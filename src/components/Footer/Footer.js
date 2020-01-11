import React from 'react';
import './Footer.module.css';

export default () => (
    <footer>
        <p>Copyright {new Date().getFullYear()}</p>
        <p>
            Designed by&nbsp;
            <a href='https://twitter.com/iamdillion' title='Dillion on Twitter'>
                Dillion Megida
            </a>
        </p>
    </footer>
)