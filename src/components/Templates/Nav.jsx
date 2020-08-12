import './Nav.css';
import React from 'react';
import NavItem from '../NavItem'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem tag="a" href="#" className="fa fa-home" label="Início"/>
            <NavItem tag="a" href="#/user" className="fa fa-user" label="Usuário"/>
        </nav>
    </aside>