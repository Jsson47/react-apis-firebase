import React from 'react';
import pedirProductos from './PedirProductos';

const ItemList = ( {productos} ) => {
    return (
        <div>
            <h1>Bienvenidos a la tienda</h1>
            {
            productos.length > 0 && 
            productos.map((producto) => {
                return (
                    <div>
                        <img src={producto.image} alt={producto.title} />
                        <h2>{producto.title}</h2>
                        <p>${producto.price}</p>
                        <p>{producto.description}</p>
                    </div>  
                )   
            })}
        </div>
    )
}

export default ItemList;