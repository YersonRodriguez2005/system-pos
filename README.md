
# Sistema POS - Restaurante

Este proyecto es un sistema de Punto de Venta (POS) diseñado para un restaurante de comidas rápidas. Permite gestionar productos, registrar ventas y visualizar el historial de ventas. El sistema está construido utilizando React para el frontend y Flask para el backend, con una base de datos SQL para almacenar la información de las ventas.

## Tecnologías Utilizadas

- **Frontend:** React, Axios
- **Backend:** Flask
- **Base de Datos:** PostgreSQL (u otro sistema SQL compatible)
- **Estilos:** CSS

## Características

- **Gestión de Productos:** Agregar productos al carrito de compras.
- **Registro de Ventas:** Registrar ventas y calcular el vuelto al cliente.
- **Historial de Ventas:** Visualizar un historial de todas las ventas realizadas.
- **Responsividad:** Diseño responsivo para dispositivos móviles y de escritorio.

## Instalación

1. **Clonar el Repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nombre-del-repositorio
   ```

2. **Instalar Dependencias del Frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Instalar Dependencias del Backend:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Configuración de la Base de Datos:**
   - Asegúrate de tener PostgreSQL (o tu sistema de base de datos elegido) instalado y funcionando.
   - Crea una base de datos y ejecuta los scripts SQL necesarios para crear las tablas requeridas.

5. **Ejecutar el Backend:**
   ```bash
   cd backend
   python app.py
   ```

6. **Ejecutar el Frontend:**
   ```bash
   cd frontend
   npm start
   ```

## Uso

1. Abre el navegador y dirígete a `http://localhost:3000` para acceder a la interfaz del sistema POS.
2. Añade productos al carrito y registra la venta al finalizar la compra.
3. Accede al historial de ventas para ver un registro de todas las transacciones realizadas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de mis redes sociales o correo electrónico.

