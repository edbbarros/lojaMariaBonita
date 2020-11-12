import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css';
import "materialize-css/dist/js/materialize";

class CriarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                nome: "",
                telefone: "",
                datanascimento: "",
                pontoderefencia: "",
                email: "",
                uf: "",
                localidade: "",
                bairro: "",
                logradouro: ""
            },
            redirect: false
        }
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/usuarios" />;

        } else {
            return (
                <div className="row container">
                    <form className="col s12" id="form1">

                        <div className="row">

                            <div className="input-field col s6">
                                <input id="nome" type="text" class="validate" />
                                <label for="nome">Nome</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="tel" type="text" class="validate" maxlength="14" />
                                <label for="tel">Telefone</label>
                            </div>

                            <div className="input-field col s6">
                                
                                <input id="dnasc" type="datetime-local" class="validate" />
                            </div>

                            <div className="input-field col s6">
                                <input id="Cep" type="text" class="validate" maxlength="9" pattern= "\d{5}-?\d{3}" />
                                <label for="Cep">Cep</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="pRef" type="text" class="validate" />
                                <label for="pRef">Ponto de refencia</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="email" type="text" class="validate" />
                                <label for="email">Email</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="UF" type="text" class="validate" />
                                <label for="UF">UF</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="local" type="text" class="validate" />
                                <label for="local">Localidade</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="Bairro" type="text" class="validate" />
                                <label for="Bairro">Bairro</label>
                            </div>

                            <div className="input-field col s6">
                                <input id="Logradouro" type="text" class="validate" />
                                <label for="Logradouro">Logradouro</label>
                            </div>

                            <button class="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                                <i class="material-icons right">send</i>
                            </button>


                        </div>


                    </form>
                </div>
            )
        }
    }
}


export default CriarUsuario;