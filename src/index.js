import React from 'react';
import ReactDOM from 'react-dom/client';
import ListaNotas from './ListaNotas';
import './estilo.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container pt-5'>
        <h1 className="text-center mb-5">Notas app</h1> 
        <ListaNotas />
    </div>
);