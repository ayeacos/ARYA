# ARYA — E-commerce de velas artesanales

ARYA es un proyecto de e-commerce inspirado en una marca de velas artesanales y aromas para el hogar. Su propuesta busca transmitir bienestar, calidez y conexión con los espacios cotidianos mediante una identidad visual cuidada y una experiencia de compra clara e intuitiva.

Este proyecto fue desarrollado como trabajo integrador durante mi formación Full Stack, aplicando conocimientos de desarrollo frontend y backend, bases de datos, autenticación y diseño de interfaces.

## Descripción del proyecto

La aplicación permite explorar una propuesta comercial de velas artesanales, conocer los productos y trabajar con funcionalidades vinculadas a la gestión de usuarios y productos.

El desarrollo combina la construcción de interfaces con la implementación de la lógica del servidor, la persistencia de datos y herramientas de administración.

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Gestión de usuarios y productos mediante APIs REST.
- Conexión con una base de datos relacional.
- Operaciones de gestión de productos.
- Dashboard administrativo.
- Interfaces web desarrolladas con EJS y React.
- Organización del proyecto siguiendo una estructura MVC.

## Tecnologías utilizadas

- **JavaScript:** lógica e interactividad.
- **Node.js:** entorno de ejecución del servidor.
- **Express:** desarrollo del servidor y gestión de rutas.
- **EJS:** renderizado de vistas.
- **React:** interfaz del dashboard administrativo.
- **MySQL:** base de datos relacional.
- **Sequelize:** ORM para trabajar con la base de datos.
- **HTML y CSS:** estructura y estilos de las interfaces.
- **Git y GitHub:** control de versiones y documentación del proyecto.

## Diseño y planificación

Antes y durante el desarrollo se trabajó en la organización de las páginas, la identidad visual y la experiencia de usuario.

El proceso incluyó la elaboración de 11 wireframes para definir la estructura y distribución de los elementos de la interfaz antes de avanzar con su implementación.

También se analizaron referentes del mercado para estudiar distintas formas de presentar productos, construir una identidad visual y transmitir conceptos relacionados con la decoración, los aromas y el bienestar.

### Referentes visuales

- [Luminico Barracas](https://www.luminicobarracas.com.ar/)
- [Innamoratta Home](https://www.innamoratta.com.ar/)
- [Casa UMO](https://casaumo.com.ar/)
- [VZ Live Simply](https://www.vzlivesimply.com/)
- [Vel Artisan](https://velartisan.com/)
- [Organic Spa Argentina](https://organicspa.com.ar/)
- [Pasionaria Argentina](https://www.pasionariaargentina.com.ar/)

Los wireframes y la documentación del proceso se encuentran en el repositorio.

## Estructura del proyecto

El repositorio contiene las principales áreas de la aplicación:

- `controllers/`: lógica de control de las solicitudes.
- `dashboard/`: interfaz administrativa desarrollada con React.
- `database/`: archivos relacionados con la base de datos.
- `middlewares/`: funciones intermedias de Express.
- `public/`: recursos públicos de la aplicación.
- `routes/`: definición de rutas.
- `views/`: vistas renderizadas con EJS.
- `wireframes/`: diseños preliminares de las interfaces.

## Instalación y ejecución

Para ejecutar el proyecto localmente:

1. Clonar el repositorio.
2. Instalar las dependencias.
3. Configurar las variables de entorno necesarias.
4. Configurar la conexión a MySQL y preparar la base de datos.
5. Ejecutar el comando de inicio definido en `package.json`.

```bash
git clone https://github.com/ayeacos/ARYA.git
cd ARYA
npm install
```

Luego, configurar el entorno según las indicaciones del proyecto y ejecutar el script correspondiente definido en `package.json`.

## Autora

**Ayelén Chacón Acosta**

Desarrolladora Full Stack interesada en crear soluciones web que combinen funcionalidad, diseño y una experiencia centrada en las personas.

- [GitHub](https://github.com/ayeacos)
- [LinkedIn](https://www.linkedin.com/in/ayelen-chacon-acosta-a86627344/)
