import React, { Component } from 'react';
import './index.css';
import "materialize-css/dist/js/materialize";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3003/sistema/usuarios`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )
    }

    renderTableData() {
        const { usuario } = this.state;
        return usuario.map((usuario, index) => (
            <tr>
                <th> {usuario.nome} </th>
                <td> {usuario.telefone} </td>
                <td> {usuario.email} </td>
                <td> <a href={`/usuarios/${usuario.id}`}>View</a></td>
            </tr>
        ));
    }

    render() {
        return (
            <div key="0" className="usuario-table">
                <div className="container">
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}