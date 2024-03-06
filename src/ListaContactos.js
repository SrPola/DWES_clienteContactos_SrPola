import React, { Component } from 'react';
import { API_URL } from './enviroment';
import { checkToken } from './checkToken';
import axios from 'axios';
import './css/App.css';
import './css/ListaContactos.css';

class ListaContactos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactos: []
        };
    }

    async componentDidMount() {
        checkToken(this);

        axios.get(`${API_URL}contactos/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                this.setState({ contactos: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="Lista-contactos">
                <header className="Lista-contactos-header">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contactos.map(contacto => (
                                <tr key={contacto.id}>
                                    <td>{contacto.nombre}</td>
                                    <td>{contacto.email}</td>
                                    <td>{contacto.telefono}</td>
                                    <td>
                                        <a href={`/editar/${contacto.id}`}><button>Editar</button></a>
                                        <a href={`/borrar/${contacto.id}`}><button>Borrar</button></a>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="4">
                                    <a href="/nuevo"><button className='addButton'>Añadir contacto</button></a>
                                    <a href="/logout"><button className='logoutButton'>Cerrar sesión</button></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </header>
            </div>
        );
    }
}

export default ListaContactos;
