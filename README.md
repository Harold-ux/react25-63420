
# Ecommerce - Primera Pre-Entrega React

Este proyecto es una primera entrega para un ecommerce utilizando React. La funcionalidad principal implementada incluye un componente `Navbar` que permite la navegación por las diferentes categorías de la tienda, una representación inicial del carrito de compras, y una estructura básica para futuros desarrollos.

---

## Estructura del Proyecto

### Archivos Principales del Componente `Navbar`
- **`Navbar.jsx`**: Componente principal que define la barra de navegación.
- **`Navbar.css`**: Estilos asociados al componente `Navbar`.

### Funcionalidades

1. **Navegación entre secciones**:
   - Incluye enlaces a las siguientes páginas:
     - Tienda principal (`/`)
     - Categoría Hombres (`/mens`)
     - Categoría Mujeres (`/womens`)
     - Categoría Niños (`/kids`)
   - Resalta visualmente la categoría seleccionada mediante un subrayado dinámico.

2. **Logotipo**:
   - Incluye un logotipo de la tienda (`logo.png`) en el lado izquierdo de la barra de navegación.

3. **Carrito de Compras**:
   - Muestra un ícono de carrito (`cart_icon.png`).
   - Incluye un contador estático inicial de productos en el carrito (`0`).

4. **Inicio de Sesión**:
   - Un botón "Ingresa" que redirige a la página de inicio de sesión (`/login`).

---

## Instalación

### Requisitos Previos
- Node.js instalado en tu sistema.
- Un gestor de paquetes como `npm` o `yarn`.

### Pasos para Ejecutar el Proyecto
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Harold-ux/react25-63420.git
   ```

2. Navegar al directorio del proyecto:
   ```bash
   cd frontend
   ```

3. Instalar las dependencias:
   ```bash
   npm install
   ```

4. Ejecutar la aplicación:
   ```bash
   npm start
   ```

---

## Estructura de Archivos Relacionados con `Navbar`

```
frontend/src/Components/Navbar/
├── Navbar.jsx
├── Navbar.css
frontend/src/Assets/
├── logo.png
├── cart_icon.png
```

---

## Dependencias

### Dependencias de Proyecto

- **`react`**: Librería principal para la creación de interfaces.
- **`react-dom`**: Módulo para interactuar con el DOM de la web.
- **`react-icons`**: Librería para utilizar íconos de React.
- **`react-router-dom`**: Librería para manejar la navegación entre rutas de la aplicación.

### Dependencias de Desarrollo

- **`@types/react`**: Tipos de TypeScript para React.
- **`@types/react-dom`**: Tipos de TypeScript para React DOM.
- **`@vitejs/plugin-react`**: Plugin de Vite para trabajar con React.
- **`eslint`**: Herramienta para mantener la calidad del código.
- **`eslint-plugin-react`**: Plugin de ESLint para React.
- **`eslint-plugin-react-hooks`**: Plugin de ESLint para React Hooks.
- **`eslint-plugin-react-refresh`**: Plugin de ESLint para React Refresh.
- **`vite`**: Herramienta para la creación de aplicaciones web modernas.

---

## Créditos

Este proyecto fue desarrollado como parte de la primera pre-entrega del curso de React. El diseño y las funcionalidades están sujetos a cambios en futuras entregas.

---