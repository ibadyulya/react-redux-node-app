import React from 'react';
import { PageHeader } from 'antd';

// import logoImg from '../../img/logo/logo.png';

import './styles.less';

class Header extends React.Component {
    render() {
        return (
            <PageHeader title="Express Task" subTitle="with my skills" />
            // <Navbar default collapseOnSelect>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <img src={logoImg} alt="img" />
            //         </Navbar.Brand>
            //         <Navbar.Toggle />
            //     </Navbar.Header>
            // </Navbar>
        );
    }
}

export default Header;
