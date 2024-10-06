from flask import Flask, request, jsonify
from flask_cors import CORS
from models.database import connect

app = Flask(__name__)
CORS(app)  # Habilitar CORS para comunicarse con el frontend

# Ruta para registrar la venta
@app.route('/api/sales', methods=['POST'])
def register_sale():
    data = request.get_json()
    product_name = data['product_name']
    quantity = data['quantity']
    total_price = data['total_price']

    conn = connect()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO sales_history (product_name, quantity, total_price) VALUES (%s, %s, %s)", 
                   (product_name, quantity, total_price))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'Venta registrada correctamente'}), 201

# Ruta para obtener el historial de ventas
@app.route('/api/sales/history', methods=['GET'])
def get_sales_history():
    conn = connect()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM sales_history")
    sales = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(sales)

if __name__ == '__main__':
    app.run(debug=True)
