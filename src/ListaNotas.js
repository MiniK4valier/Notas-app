import React, { useEffect, useRef, useState } from "react";
import ItemNota from "./ItemNota";
import { v4 as uuid } from 'uuid';

function ListaNotas() {
    const [notas, setNotas] = useState([]);
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    const KEY = 'notas-app-notas';

    useEffect(() => {
        const misNotas = JSON.parse(localStorage.getItem(KEY));
        if (misNotas) {
            setNotas(misNotas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(notas));
    }, [notas]);

    const agregarNota = () => {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;

        if (descripcion === '') return;

        const nuevaNota = {
            id: uuid(),
            titulo,
            descripcion,
            importante
        };

        setNotas(prevNotas => [...prevNotas, nuevaNota]);

        // Limpiar campos
        tituloRef.current.value = '';
        descripcionRef.current.value = '';
        importanteRef.current.checked = false;
    }   

    return (
        <>
            <h2 className="text-center mb-4">Listado de notas</h2>
            <div className="input-group my-4">
                <input ref={tituloRef} className="form-control" placeholder="Título" />
                <input ref={descripcionRef} className="form-control ms-2" placeholder="Descripción" />
                <div className="form-check ms-3 d-flex align-items-center">
                    <input ref={importanteRef} type="checkbox" className="form-check-input" id="importanteCheck" />
                    <label className="form-check-label ms-2" htmlFor="importanteCheck">Importante</label>
                </div>
                <button onClick={agregarNota} className="btn btn-primary ms-3">Agregar</button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {notas.map(nota => (
                    <ItemNota key={nota.id} nota={nota} />
                ))}
            </div>
        </>
    );
}

export default ListaNotas;