import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export default class SwFooter extends React.Component {
    render(){
        return (        
        <Navbar fixedBottom>
            <h4> &copy; Stock Watch {new Date().getFullYear().toString()} </h4>
        </Navbar>            
        );
    }
}