import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { verifyTokenAsync } from './../../redux/actions/authAsyncActions';
import { Navbar } from 'react-bootstrap'

//imported components
import NavbarComponent from './headerComponents/navbar'

function Header(props) {

    return (
        <>
            <Navbar bg="white" variant="light">
                <div className="container">
                    <Navbar.Brand href="#home">logo</Navbar.Brand>
                    <NavbarComponent />
                </div>
            </Navbar>
        </>
    )
}

export default Header;
