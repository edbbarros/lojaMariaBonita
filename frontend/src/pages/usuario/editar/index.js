import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './index.css';
import "materialize-css/dist/js/materialize";

class EditarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                nome: "",
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;
        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:3003/sistema/usuarios/${id}`).then(data => {
            data.json().then(data => {
                if (data.error) {
                    this.setState({ erro: data.error });
                } else {
                    this.setState({ usuario: data });
                }
            });
        }).catch(erro => {
            this.setState({ erro: erro });
        });
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/usuarios/" />;
        } else {
            return (
                <div className="row container">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input name="name" type="text" id="name" onChange={this.handleInputChange} />
                                <label htmlFor="name">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="tel" type="text" id="tel" value={this.state.usuario.telefone} />
                                <label htmlFor="tel">telefone</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="dNasci" type="date-local" id="dNasci" value={this.state.usuario.datanascimento} />
                                <label htmlFor="dNasci">datanascimento</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="pRef" type="text" id="pRef" value={this.state.usuario.pontoderefencia} />
                                <label htmlFor="pRef">ponto de refencia</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="cep" type="text" id="cep" value={this.state.usuario.cep} />
                                <label htmlFor="cep">cep</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="email" type="email" id="email" value={this.state.usuario.email} />
                                <label htmlFor="email">email</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="uf" type="text" id="uf" value={this.state.usuario.uf} />
                                <label htmlFor="uf">uf</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="locale" type="text" id="locale" value={this.state.usuario.localidade} />
                                <label htmlFor="locale">localidade</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="bairro" type="text" id="bairro" value={this.state.usuario.bairro} />
                                <label htmlFor="bairro">bairro</label>
                            </div>
                            <div className="input-field col s6">
                                <input name="logradouro" type="text" id="logradouro" value={this.state.usuario.logradouro} />
                                <label htmlFor="logradouro">logradouro</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Atualizar</button>
                    </form>
                </div>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.state.usuario.nome = value;
    };

    handleSubmit = event => {
        event.preventDefault();
        const { id } = this.props.match.params;
        let upJson = {
            id: this.state.usuario.id,
            nome: this.state.usuario.nome,
            telefone: this.state.usuario.telefone,
            datanascimento: this.state.usuario.datanascimento,
            pontoderefencia: this.state.usuario.pontoderefencia,
            cep: this.state.usuario.cep,
            email: this.state.usuario.email,
            uf: this.state.usuario.uf,
            localidade: this.state.usuario.localidade,
            bairro: this.state.usuario.bairro,
            logradouro: this.state.usuario.logradouro,
        }
        fetch(`http://localhost:3003/sistema/usuarios/${id}`, {
            method: "PUT",
            body: JSON.stringify(upJson),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => {
            if (data.ok) {
                this.setState({ redirect: true });
            } else {
                [data].json().then(data => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    }
                });
            }
        }).catch(erro => this.setState({ erro: erro }));
    };
}

export default EditarUsuario;