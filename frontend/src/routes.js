import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import MainUsuario from './pages/usuario/main/index';


    const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/usuario" component={MainUsuario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;