# Entrega Final React - E-commerce

En este repositorio se encuentran las **tres entregas** necesarias para completar el módulo de **ReactJS** de la comisión **63420** en **CoderHouse**. Mi nombre es **Harold Díaz** y en dichas entregas utilizamos la librería de React junto con los conocimientos previos adquiridos en **HTML, CSS y JavaScript**.

Este proyecto es un **e-commerce de ropa** con tres categorías principales: hombres, mujeres y niños. Integra el **frontend** y el **backend** en una misma estructura para facilitar la gestión y el despliegue.

## 📌 Instalación

Para instalar todas las dependencias tanto del **frontend** como del **backend**, ejecuta:

```sh
npm run install:all
```

Si prefieres instalar por separado en cada directorio:

```sh
cd Frontend && npm install
cd ../Backend && npm install
```

---

## 🚀 Scripts de Ejecución

El proyecto está configurado para ejecutar tanto el frontend como el backend de manera individual o conjunta.

### **Frontend**

- Iniciar el entorno de desarrollo:
  ```sh
  npm run dev:frontend
  ```
- Iniciar la aplicación en modo producción:
  ```sh
  npm run start:frontend
  ```
- Construir la aplicación:
  ```sh
  npm run build:frontend
  ```

### **Backend**

- Iniciar el servidor en desarrollo con nodemon:
  ```sh
  npm run dev:backend
  ```
- Iniciar el servidor en producción:
  ```sh
  npm run start:backend
  ```
- Construir la aplicación (si es necesario):
  ```sh
  npm run build:backend
  ```

### **Ejecutar Frontend y Backend en Paralelo**

Para ejecutar el frontend y el backend al mismo tiempo, utiliza:

```sh
npm run start:all
```

---

## 📂 Estructura de Archivos

```sh
/
├── Frontend/        # Carpeta del frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── Backend/         # Carpeta del backend (Node.js + Express + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── package.json     # Configuración general del proyecto
└── README.md        # Documentación
```

---

## 🔧 Configuración de la Base de Datos

Para conectar correctamente la base de datos, es necesario configurar un archivo **.env** en la carpeta `Backend/`.

### **Ejemplo de .env:**

```env
MONGO_URI=mongodb+srv://TU_USUARIO:TU_CONTRASEÑA@cluster0.ratevnb.mongodb.net/NOMBRE_DE_LA_BASE?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

### **Pasos para Configurar:**

1. Crear un archivo `.env` en la carpeta `Backend/`.
2. Copiar y pegar la configuración anterior.
3. Reemplazar `TU_USUARIO` y `TU_CONTRASEÑA` con tus credenciales de MongoDB.
4. Asegurar que el backend esté configurado para leer las variables de entorno con `dotenv`.

---

## 🛒 Funcionalidades Principales

### **1. Gestión de Base de Datos con Firebase y MongoDB**

- Implementación de operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar).
- Uso de Firebase para almacenar productos.
- Uso de MongoDB para almacenar comentarios.
- Variables de entorno para ocultar credenciales sensibles.

### **2. Simulación de Registro de Usuarios**

- Botón **"Ingresa"** con un formulario básico.
- Plan de almacenamiento de datos en **localStorage**.

### **3. Carrito de Compras**

- Muestra un **GIF** cuando no hay productos en el carrito.
- Renderiza la cantidad de ítems agregados.
- Mejoras pendientes en la renderización de los parámetros del carrito.

### **4. Manejo de Stock y Checkout**

- **Formulario de Compra:**
  - Se almacena la información del usuario en el estado `datosForm`.
  - `handleChangeInput` actualiza el estado a medida que se ingresan datos.
  - `generateOrder` guarda la orden en **Firebase** y muestra una alerta de éxito.
  - `updateStock` actualiza el stock restando la cantidad comprada.
  - `validateForm` verifica los datos antes de generar la orden.

### **5. Sección de Comentarios**

- Los comentarios se almacenan en **MongoDB Atlas**.
- Se pueden visualizar en la **sección de comentarios** al final de la página.

---

## 📦 Dependencias Principales

### **Raíz del Proyecto**

```json
{
  "dependencies": {
    "concurrently": "^7.6.0",
    "react-spinners": "^0.14.1",
    "react-toastify": "^10.0.5",
    "sweetalert2": "^11.4.9",
    "yup": "^1.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.1.0"
  }
}
```

### **Frontend**

```json
{
  "dependencies": {
    "axios": "^1.7.2",
    "firebase": "^10.12.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.2.1",
    "react-router-dom": "^6.23.1",
    "react-toastify": "^10.0.5"
  }
}
```

### **Backend**

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.19.2",
    "firebase": "^10.12.2",
    "mongodb": "^6.7.0",
    "mongoose": "^8.4.0"
  }
}
```

---

## 🔧 Retos y Futuras Mejoras

- **Mejorar el manejo de sub-colecciones en Firebase.**
- **Implementar un servidor local** para mejorar el desarrollo.
- **Optimizar la interfaz** y mejorar el flujo de compra en el carrito.

---

## 🤝 Contribución

Si deseas contribuir, puedes hacer un **fork** del repositorio, crear una **rama** con tu mejora y enviar un **pull request**.

---

## 🚀 ¡Gracias por revisar este proyecto! 🎉

