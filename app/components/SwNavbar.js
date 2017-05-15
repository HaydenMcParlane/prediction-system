import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export default class SwNavbar extends React.Component {    
    
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Stock Watch</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>                    
                    {/* Dynamically assign title based on profile*/}
                    <NavDropdown eventKey={1} title="John Doe" id="navmenu">                        
                        <MenuItem eventKey={1.2}>Watch List</MenuItem>                        
                    </NavDropdown>
                </Nav>
            </Navbar>            
        );
    }
}
