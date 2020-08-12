import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom'

import Logo from '../components/Templates/Logo';
import Nav from '../components/Templates/Nav';
import Routes from './Routes'
import Footer from '../components/Templates/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>