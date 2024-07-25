import React from "react";

function ItemNota({ nota }) {
    const { importante, titulo, descripcion } = nota;
    const cardClass = importante ? "card bg-danger text-white" : "card bg-warning";
    
    return (
        <div className={cardClass} style={{ width: '18rem', minHeight: '12rem', margin: '15px' }}>
            <div className="card-body d-flex flex-column">
                {titulo && <h5 className="card-title mb-3">{titulo}</h5>}
                <p className="card-text flex-grow-1">{descripcion}</p>
                <div className="text-right mt-2">
                    <small>{importante ? "Importante" : "Normal"}</small>
                </div>
            </div>
        </div>
    );
}

export default ItemNota;