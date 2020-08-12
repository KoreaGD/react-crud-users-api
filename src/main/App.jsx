import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';

import Logo from '../components/Templates/Logo';
import Nav from '../components/Templates/Nav';
import Footer from '../components/Templates/Footer'
import Home from '../components/Home';

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>