import axios from 'axios';
import { API_URL } from './enviroment';

export async function checkToken(component) {
    if (!localStorage.getItem('token')) {
        window.location = '/';
    }

    try {
        const response = await axios.get(`${API_URL}contactos/`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (Array.isArray(response.data)) {
            component.setState({ contactos: response.data });
        } else {
            localStorage.removeItem('token');
            window.location.href = "/";
        }
    } catch (error) {
        console.log(error);
    }
}
