import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import React from 'react';

import Logo from '../components/Templates/Logo';
import Nav from '../components/Templates/Nav';
import Main from '../components/Templates/Main'
import Footer from '../components/Templates/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Inicio"
            subtitle="Segundo Projeto do capitulo de React." />
        <Footer />
    </div>