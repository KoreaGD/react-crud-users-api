import React, { Component } from 'react';
import Main from '../Templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir!'
};

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps} >
                User SingUp
            </Main>
        );
    };
};