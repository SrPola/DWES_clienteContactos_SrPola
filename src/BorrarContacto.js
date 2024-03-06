import React, { Component } from 'react';
import { API_URL } from './enviroment';
import axios from 'axios';
import { checkToken } from './checkToken';

class BorrarContacto extends Component {
    async componentDidMount() {
        checkToken(this);
        const id = window.location.pathname.split('/')[2];
        axios.delete(`${API_URL}contactos/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                window.location = '/contactos/';
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return null;
    }
}

export default BorrarContacto;
