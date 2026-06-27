# Planificación Sprint 5

## Objetivo

Implementar el sistema de usuarios del proyecto ARYA.

## Orden de trabajo

1. Revisar la estructura de usuarios y el archivo users.json.
2. Implementar formulario de registro.
3. Configurar Multer para imágenes de perfil.
4. Implementar bcrypt para encriptar contraseñas.
5. Guardar usuarios en JSON.
6. Implementar formulario de login.
7. Configurar sesiones con express-session.
8. Crear vista de perfil.
9. Implementar middleware de usuarios autenticados.
10. Implementar middleware de huéspedes.
11. Implementar logout.
12. Realizar pruebas y corrección de errores.

## Resultado esperado

Permitir registro, login, logout y acceso restringido según el estado de autenticación del usuario.

# Planning Sprint 7 - Validaciones

## Objetivo

Implementar validaciones de back-end y front-end para asegurar la integridad de los datos enviados por los usuarios y mejorar la experiencia de uso del sitio.

## Tareas

### 1. Planificación

* Revisar la consigna.
* Definir el orden de implementación.
* Actualizar tablero de trabajo.

### 2. Validaciones Back-End

#### Registro de usuarios

* Validar nombre (obligatorio, mínimo 2 caracteres).
* Validar apellido (obligatorio, mínimo 2 caracteres).
* Validar email (obligatorio y formato válido).
* Validar email único en la base de datos.
* Validar contraseña (mínimo 8 caracteres).
* Validar formato de imagen.

#### Login

* Validar email.
* Validar existencia del usuario.
* Validar contraseña.

#### Productos

* Validar nombre (mínimo 5 caracteres).
* Validar descripción (mínimo 20 caracteres).
* Validar imagen.

### 3. Mostrar errores en vistas

* Registro.
* Login.
* Crear producto.
* Editar producto.

### 4. Validaciones Front-End

#### Registro

* Nombre.
* Apellido.
* Email.
* Contraseña.
* Imagen.

#### Login

* Email.
* Contraseña.

#### Productos

* Crear producto.
* Editar producto.

### 5. Pruebas

* Verificar mensajes de error.
* Verificar formularios válidos e inválidos.

### 6. Retrospectiva

* Actualizar Retro.md al finalizar el sprint.