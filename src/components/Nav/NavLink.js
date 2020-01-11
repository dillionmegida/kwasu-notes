import React from 'react';
import { Link } from 'gatsby';

export default props => (
    <li>
        <Link
            to={props.to}
            activeClassName={props.activeClass}
        >
            {props.name}
        </Link>
    </li>
)