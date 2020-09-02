import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container
} from 'reactstrap'


const AppNavBar = () => {
    // state just for open and close nabBar
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggle = () => setIsNavBarOpen(!isNavBarOpen);

    return (
        <div>
            <Navbar color="light" light expand="sm">
                <Container>
                    <NavbarBrand href="https://github.com/SinisaRunjic/shopping-list">MERN app</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isNavBarOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default AppNavBar;