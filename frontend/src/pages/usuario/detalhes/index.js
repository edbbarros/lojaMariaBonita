import React, { Component } from 'react';
import './index.css';
import "materialize-css/dist/js/materialize";

export default class Usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: []

        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3003/sistema/usuarios/${id}`)
            .then(usuario =>
                usuario.json().then(usuario => this.setState({ usuario }))
            )


    }

    renderTableData() {
        const { usuario } = this.state;
        return (
            <tr>
                <th> {usuario.nome} </th>
                <td> {usuario.telefone} </td>
                <td> {usuario.datanascimento} </td>
                <td> {usuario.pontoderefencia} </td>
                <td> {usuario.email} </td>
                <td> {usuario.uf} </td>
                <td> {usuario.localidade} </td>
                <td> {usuario.bairro} </td>
                <td> {usuario.logradouro} </td>
            </tr>
        );
    }



    render() {
        const { usuario } = this.state;
        return (
            <div key="0" className="usuario-table">
                <div className=" container">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Telefone</th>
                                <th>datanascimento</th>
                                <th>pontoderefencia</th>
                                <th>Email</th>
                                <th>uf</th>
                                <th>localidade</th>
                                <th>bairro</th>
                                <th>logradouro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <a href={`/editarUsuario/${usuario.id}`} className="waves-effect green lighten-2 btn bt1 col s9">Editar </a>
                    <a href={`/deletarUsuario/${usuario.id}`} className="waves-effect green lighten-2 btn bt1 col s9">Deletar </a>
                    <a href={`/usuario`} className="waves-effect green lighten-2 btn bt1 col s9">Voltar </a>
                </div>
            </div>
        )
    }
}