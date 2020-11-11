import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import "materialize-css/dist/js/materialize";


export default class Usuario extends Component{

            state = {
                usuario =  {}
            };

            componentDidMount(){
                const {id} = this.props.match.params;
            }
                
}