import React from 'react';
import Main from '../Templates/Main';

export default props =>
    <Main icon="home" title="Inicio"
        subtitle="Segundo Projeto do capitulo de React." >
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificação de
    um cadastro desenvolvido em React.</p>
    </Main>