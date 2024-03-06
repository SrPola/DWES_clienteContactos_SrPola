import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';
import App from './App';
import Login from './Login';
import ListaContactos from './ListaContactos';
import BorrarContacto from './BorrarContacto';
import CrearContacto from './CrearContacto';
import EditarContacto from './EditarContacto';
import Logout from './Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/contactos/" element={<ListaContactos />} />
                <Route path="/borrar/:id" element={<BorrarContacto />} />
                <Route path="/editar/:id" element={<EditarContacto />} />
                <Route path="/nuevo" element={<CrearContacto />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<h2>No encontrada</h2>} />
            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
