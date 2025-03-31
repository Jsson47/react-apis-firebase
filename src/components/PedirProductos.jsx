import data from '../Data/producto.json';

const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

export default pedirProductos;