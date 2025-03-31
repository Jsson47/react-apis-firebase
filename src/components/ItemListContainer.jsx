import React, { useState, useEffect } from 'react' 
import data from '../Data/producto.json';
import pedirProductos from './PedirProductos';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = React.useState([]);
    
    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
        })
    },[])

    return (
        <div>
        <ItemList productos = {productos}/>
        </div>
    )
};

export default ItemListContainer
