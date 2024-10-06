import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import './SalesHistory.css';

const SalesHistory = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/sales/history');
                setSales(response.data);
            } catch (error) {
                console.error("Error fetching sales history:", error);
            }
        };

        fetchSales();
    }, []);

    return (
        <div className="sales-history">
            <h2>Historial de Ventas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.product_name}</td>
                            <td>{sale.quantity}</td>
                            <td>${sale.total_price.toLocaleString('es-CO')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesHistory;
