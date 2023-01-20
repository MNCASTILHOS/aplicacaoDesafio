import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/admin/dashboard';
import Clientes from './pages/admin/clientes';
import ClientesEditar from './pages/admin/clientes/clientes.editar';
import ClientesCadastrar from './pages/admin/clientes/clientes.cadastrar';
import Usuarios from './pages/admin/usuarios';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import UsuariosRandom from './pages/admin/random-usuarios';
import StatusCode from './pages/admin/status-code';
import RandomDog from './pages/admin/random-dog';
import Login from './pages/admin/login';
import PrivateRoute from './services/wAuth';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />

                {/* Rota Admin */}
                <PrivateRoute path="/admin" exact component={Dashboard} />
                <Route path="/admin/login" exact component={Login} />

                <PrivateRoute path="/admin/clientes" exact component={Clientes} />
                <PrivateRoute path="/admin/clientes/cadastrar" exact component={ClientesCadastrar} />
                <PrivateRoute path="/admin/clientes/editar/:idCliente" exact component={ClientesEditar} />

                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <PrivateRoute path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuariosEditar} />
                <PrivateRoute path="/admin/usuarios-random" exact component={UsuariosRandom} />
                <PrivateRoute path="/admin/status-code" exact component={StatusCode} />
                <PrivateRoute path="/admin/random-dog" exact component={RandomDog} />

                <Redirect from="*" to="/admin/login" />
            </Switch>
        </BrowserRouter>
    )
}