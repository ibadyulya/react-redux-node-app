import React from 'react';
import { Navbar } from 'react-bootstrap';

import logoImg from '../../img/logo/logo.png';

import './styles.less';

const Header = props => {
    return (
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <img src={logoImg} alt="img" />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>
    );
};

export default Header;
