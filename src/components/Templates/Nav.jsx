import './Nav.css';
import React from 'react';
import NavItem from '../NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem to="/"
                icon="home" label="Início" />
            <NavItem to="/users"
                icon="user" label="Usuários" />
        </nav>
    </aside>