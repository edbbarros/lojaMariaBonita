import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import MainUsuario from './pages/usuario/main/index';
import Detalheusuario from './pages/usuario/detalhes/index';
import CriarUsuario from './pages/usuario/criar/index';
import EditarUsuario from './pages/usuario/editar/index';
import DeletarUsuario from './pages/usuario/deletar/index';

    const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuario" component={MainUsuario} />
            <Route path = "/usuarios/:id" component={Detalheusuario} />
            <Route path = "/criar" component={CriarUsuario} />
            <Route path = "/editarUsuario/:id" component={EditarUsuario} />
            <Route path = "/deletarUsuario/:id" component={DeletarUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;