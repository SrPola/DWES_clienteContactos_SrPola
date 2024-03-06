import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './enviroment';
import './css/App.css';
import './css/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            password: ''
        };
    }

    async componentDidMount() {
        if (localStorage.getItem('token')) {
            window.location = '/contactos/';
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}login`, this.state)
            .then(response => {
                localStorage.setItem('token', response.data.jwt);
                // console.log(localStorage.getItem('token'));
                window.location = '/contactos/';
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="usuario">Nombre: </label>
                            <input type="nombre" name="usuario" onChange={this.handleChange} id="usuario" />
                        </div>
                        <div>
                            <label htmlFor="nombre">Contraseña: </label>
                            <input type="password" name="password" onChange={this.handleChange} />
                        </div>
                        <button className='loginButton' type="submit">Entrar</button>
                    </form>
                </header>
            </div>
        );
    }
}

export default Login;
