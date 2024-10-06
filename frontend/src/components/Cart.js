import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, total, onRemoveItem, onCalculateChange }) => {
    const [cash, setCash] = React.useState('');
    const change = cash ? Number(cash.replace(/\./g, '').replace(',', '.')) - total : 0;

    const handleCashChange = (e) => {
        const value = e.target.value.replace(/\./g, '').replace(',', '.');
        if (!isNaN(value) || value === '') {
            setCash(value);
        }
    };

    return (
        <div>
            <h2>Carrito de compras</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} x{item.quantity} - ${ (item.price * item.quantity).toLocaleString('es-CO') }
                        <button onClick={() => onRemoveItem(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${ total.toLocaleString('es-CO') }</p>

            <input
                type="text"
                placeholder="Dinero recibido"
                value={cash ? Number(cash).toLocaleString('es-CO') : ''}
                onChange={handleCashChange}
                className="cash-input"
            />
            <p>Vuelto: ${ change >= 0 ? change.toLocaleString('es-CO') : 0 }</p>
            <button onClick={onCalculateChange}>Registrar Venta</button>
        </div>
    );
};

export default Cart;
