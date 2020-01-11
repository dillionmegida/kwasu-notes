import React from 'react';

import NavLink from './NavLink';

const NavList = [
    {
        name: "Notes",
        to: '/'
    },
    {
        name: "About",
        to: '/about'
    }
];

export default props => (
    <ul>
        {
            NavList.map((nav, i) => (
                <NavLink
                    key = {`${nav}_${i}`}
                    name = {nav.name}
                    to = {nav.to}
                    activeClass = {props.activeClass}
                />
            ))
        }
    </ul>
)