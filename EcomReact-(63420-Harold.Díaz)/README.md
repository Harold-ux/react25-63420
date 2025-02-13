# E-commmerce React - entrega final (corrección)

<div>
<img src="react-1-logo-svgrepo-com.svg" width="50"/>
</div>

#### Dev - Harold Díaz

##### Imagen de la estructura de la entrega final


![Imagen 1 del árbol](image.png)
![Imagen 2 del árbol ](image2.png)

## Anotaciones:

# 📦 Entrega Final React - E-commerce

Este proyecto integra tanto el **frontend** como el **backend** en una misma estructura, permitiendo una gestión más eficiente y un despliegue simplificado.

Estructura del Proyecto


Entrega Final React/  
│── backend/                 # Servidor y lógica de base de datos  
│── frontend/                # Aplicación React (Cliente)  
│── node_modules/            # Dependencias de Node.js  
│── .gitignore               # Archivos y carpetas a ignorar en Git  
│── package.json             # Configuración del proyecto y dependencias  
│── package-lock.json        # Archivo de bloqueo de dependencias  
│── react-1-logo-svgrepo.svg # Logo de React para documentación  
│── README.md                # Documentación del proyecto  
│── image.png                # Imagen de la estructura del proyecto  
│── image2.png               # Imagen de la interfaz de usuario  


## 📌 Índice

1. [Instalación](#instalación)
2. [Ejecución del Proyecto](#ejecución-del-proyecto)
3. [Scripts Disponibles](#scripts-disponibles)
4. [Estructura de Archivos](#estructura-de-archivos)
5. [Dependencias Principales](#dependencias-principales)
6. [Funcionalidades Clave](#funcionalidades-clave)
7. [Configuración de la Base de Datos](#Configuración-de-la-Base-de-Datos)
8. [Tecnologías usadas](#Frontend_Backend)

---

## 📥 Instalación

# Requisitos:
  - Node.js instalado
  - MongoDB Atlas o Firebase configurado
  - Git instalado

## Clonar el repositorio:
git clone https://github.com/Harold-ux/react25-63420.git


Para instalar todas las dependencias necesarias en la raíz del proyecto, ejecuta:
npm install


# Si prefieres instalar cada parte por separado:

cd Frontend && npm install
cd ../Backend && npm install


---

## 🚀 Ejecución del Proyecto

Para ejecutar el **frontend**:
cd Frontend && npm run dev

Para ejecutar el **backend**:
cd Backend && npm run dev

Para ejecutar **frontend y backend** en paralelo:
npm run start:all


---

## 🚀 Scripts de Ejecución

### 🎨 Frontend
- **Iniciar el entorno de desarrollo**:
    npm run dev:frontend

- **Iniciar en modo producción**:
    npm run start:frontend

- **Construir la aplicación**:
    npm run build:frontend


### 🖥️ Backend
- **Iniciar el servidor en desarrollo (con nodemon)**:
    npm run dev:backend
- **Iniciar el servidor en producción**:
    npm run start:backend
- **Construir la aplicación (si es necesario)**:
    npm run build:backend


### 🔄 Ejecutar Frontend y Backend en Paralelo
    npm run start:all

---

## 📂 Estructura de Archivos

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

---

## 📦 Dependencias Principales

### 🌍 Raíz del Proyecto
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

### ⚛️ Frontend (`Frontend/package.json`)
```json
{
  "dependencies": {
    "axios": "^1.7.2",
    "firebase": "^10.12.2",
    "mongoose": "^8.4.0",
    "react": "^18.3.1",
    "react-router-dom": "^6.23.1",
    "react-toastify": "^10.0.5"
  }
}
```

### 🖥️ Backend (`Backend/package.json`)
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

## ⚙️ Funcionalidades Clave

### 🔹 Gestión de Base de Datos con Firebase
- Operaciones CRUD (Crear, Leer, Actualizar y Eliminar).
- Uso de Firebase y MongoDB para almacenamiento de datos.
- Variables de entorno para proteger credenciales.

### 🔹 Simulación de Registro de Usuarios
- Botón "Ingresa" con un formulario básico.
- Planeado para almacenamiento en `localStorage`.

### 🔹 Carrito de Compras
- Uso de contexto para la gestión del carrito.
- Manejo de stock y selección de tallas.
- Integración con `react-toastify` y `sweetalert2` para notificaciones.

### 🔹 Checkout y Manejo de Stock
- Validación de formulario.
- Generación de orden con Firebase.
- Actualización del stock en tiempo real.

---

### 🔹 Alertas y Notificaciones
- Implementación de react-toastify y SweetAlert2 para mejorar la experiencia del usuario


## 🔧 Configuración de la Base de Datos

Para conectar correctamente la base de datos, es necesario configurar un archivo .env en la carpeta Backend/.

Ejemplo de .env:

MONGO_URI=mongodb+srv://TU_USUARIO:TU_CONTRASEÑA@cluster0.mongodb.net/NOMBRE_DE_LA_BASE?retryWrites=true&w=majority&appName=Cluster0
PORT=5000

Pasos para Configurar:

Crear un archivo .env en la carpeta Backend/.

Copiar y pegar la configuración anterior.

Reemplazar TU_USUARIO, TU_CONTRASEÑA y NOMBRE_DE_LA_BASE con tus credenciales de MongoDB.

---

## Tecnologías Utilizadas

# Frontend
- React.js
- React Router
- Firebase
- React Icons
- SweetAlert2

# Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Firebase Firestore

---


## Instrucciones de Uso

### Backend

Para correr el servidor desde la carpeta `Backend`, utiliza el siguiente comando:


`(npm run dev)`

> backend@1.0.0 dev
> nodemon Server.js

[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): _._
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Servidor iniciado en el puerto 5000
MongoDB está conectado...

/////////////////////////////////////////////////////////////

Luego, tenemos el comando para correr el `Front-end`, que es:

`(npm run dev)`

> entrega_final_react@0.0.0 dev
> vite

VITE v5.2.12 ready in 227 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help

///////////////////////////////////////////////////////////

Y por último, tenemos el proyecto con ambas bases de datos funcionando (Front y Back-end)... solo con el comando
`npm run start:all` desde la ruta de la carpeta principal: "C:\Users\Harol\OneDrive\Escritorio\CoderHouse\React\Entregas\EcommerceReactMain\Entrega Final React"

Se muestra así:

> entrega-final-react@1.0.0 start:all
> concurrently "npm run dev:frontend" "npm run dev:backend"

[0] 
[0] > entrega-final-react@1.0.0 dev:frontend
[0] > npm run dev --prefix Frontend
[0] 
[1] 
[1] > entrega-final-react@1.0.0 dev:backend
[1] > npm run dev --prefix Backend
[1] 
[0] 
[0] > entrega_final_react@0.0.0 dev
[0] > vite
[0]
[1]
[1] > entrega_final_react@1.0.0 dev
[1] > nodemon server.js
[1]
[1] [nodemon] 3.1.0
[1] [nodemon] to restart at any time, enter `rs`
[1] [nodemon] watching path(s): *.*
[1] [nodemon] watching extensions: js,mjs,cjs,json
[1] [nodemon] starting `node server.js`
[0] Port 5173 is in use, trying another one...
[0] 
[0]   VITE v5.2.12  ready in 610 ms
[0]
[0]   ➜  Local:   http://localhost:5173/
[0]   ➜  Network: use --host to expose
[1] Servidor iniciado en el puerto 5000
[1] MongoDB está conectado...



Este **README** cubre todos los aspectos clave del proyecto, incluyendo instalación, ejecución y dependencias. 🚀



## Contacto

Harold Díaz - [d.web.33160@gmail.com]

