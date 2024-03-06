import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from './enviroment';
import { checkToken } from './checkToken';
import AtrasBoton from './AtrasBoton';
import './css/App.css';
import './css/EditarContacto.css';

class EditarContacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            telefono: ''
        };
    }

    async componentDidMount() {
        checkToken(this);
        const id = window.location.pathname.split('/')[2];
        axios.get(`${API_URL}contactos/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                this.setState(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = window.location.pathname.split('/')[2];
        axios.put(`${API_URL}/contactos/${id}`, this.state, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log(response);
                // window.location = '/contactos/';
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="Editar-contacto">
                <header className="Editar-contacto-header">
                    <h1>Editar contacto</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} id="nombre" />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono: </label>
                            <input type="telefono" name="telefono" value={this.state.telefono} onChange={this.handleChange} />
                        </div>
                        <button type="submit">Guardar</button>
                    </form>
                    <AtrasBoton />
                </header>
            </div>
        );
    }
}

export default EditarContacto;
