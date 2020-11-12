import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import MainUsuario from './pages/usuario/main/index';
import Detalheusuario from './pages/usuario/detalhes/index';
import CriarUsuario from './pages/usuario/criar/index';

    const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuario" component={MainUsuario} />
            <Route path = "/usuarios/:id" component={Detalheusuario} />
            <Route path = "/criar" component={CriarUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;