
# Proyecto Final - E-commerce Harold Díaz

Este es el proyecto final del módulo de ReactJS de la comisión 63420 en CoderHouse. Mi nombre es Harold Díaz y en este proyecto se utiliza la librería de React junto con conocimientos previos adquiridos en HTML, CSS y JavaScript.

Es un **e-commerce de ropa** con tres categorías principales: **hombres, mujeres y niños**. El proyecto está enfocado únicamente en el frontend utilizando **React** y **Vite**

## 📌 Instalación

Para instalar las dependencias necesarias, ejecuta:

```bash
npm run install
```

## 🚀 Script de Ejecución

El proyecto está configurado para ejecutarse de manera individual. Para iniciar el entorno de desarrollo, solo usa:

```bash
npm run dev
```

## 📂 Estructura de Archivos

```
/                   # Carpeta raíz del proyecto
├── src/            # Carpeta de código fuente (React + Vite)
├── public/         # Archivos estáticos (imágenes, favicon, etc.)
├── package.json    # Configuración general del proyecto
├── vite.config.js  # Configuración de Vite
└── README.md       # Documentación
```

## 🛒 Funcionalidades Principales

1. **Gestión de Productos**  
   Los productos están almacenados en **Firebase** y pueden ser consultados, filtrados y ordenados por categoría (hombres, mujeres, niños).

2. **Carrito de Compras**  
   - Muestra un **GIF** cuando no hay productos en el carrito.
   - **Renderiza** la cantidad de ítems agregados al carrito.
   - Los productos se almacenan en **localStorage** para persistencia entre sesiones.

3. **Formulario de Compra**  
   Al realizar el proceso de checkout, los datos del usuario se almacenan en el estado `datosForm` y se puede realizar la compra de los productos, actualizando la disponibilidad de stock.

4. **Manejo de Stock**  
   La cantidad de productos se actualiza de acuerdo con el stock disponible y la cantidad comprada por el usuario.

## 📦 Dependencias Principales

### Raíz del Proyecto  
```json
{
  "dependencies": {
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

### Frontend  
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