# Backend NodeJS Ssr. Test

Este trabajo práctico tiene como objetivo principal conocer las mejores prácticas del candidato, para ello se solicita tomarse el tiempo de leer bien la consigna y entregar el mejor desarrollo posible. Todo componente agregado será considerado como un **`Plus`**.

### 🤔 **Antes de arrancar, debes tener en cuenta:**

- Se espera que la persona sea creativa 🎨
- Programe de forma componentizada y ordenada 🏗️
- Respete los request que pedimos 🤓
- Se espera que no sea un trabajo de mas de 8 horas, 12 horas como mucho ⏰

## 📝 Consigna

---

### Objetivo

Construir una backend que tome información de la API pública de Star Wars y que sea utilizada en pos de crear una nueva aplicación de gestión de películas y series. El backend deberá estar desarrollado en Node.js usando Express o Nest.js.

<aside>
💡 **Obligatorio:** Recorda abrir un repositorio público (puede ser Github, Gitlab, Bitbucket…) 
**Nice to Have:** Deseable que el proyecto esté deployado en un server (gratuito)
**Nice to Have:** Deseable que el proyecto tenga testings

</aside>

## **Ejercicio Práctico: Aplicación de Gestión de Películas**

### 👀 Descripción del proyecto:

Tu objetivo es desarrollar una aplicación backend utilizando NestJS que permita gestionar películas. La aplicación debe cumplir con los siguientes requisitos:

1. 🔑 **Autenticación y autorización:** Implementa un sistema de autenticación y autorización que permita a los usuarios registrarse, iniciar sesión y obtener un token de acceso. Utiliza JWT (JSON Web Tokens) para la autenticación.
2. 👥 **Gestión de usuarios:** Implementa los endpoints necesarios para el registro (sign-up) y login de usuarios. Al registrar un nuevo usuario, asegúrate de almacenar su información en una base de datos y de aplicar las validaciones necesarias.
3. 🤺 **Manejo de roles:** Define dos roles de usuario: "Usuario Regular" y "Administrador". Los usuarios registrados por defecto serán "Usuarios Regulares". Solo los usuarios con el rol de "Administrador" deben tener acceso a las operaciones de creación, actualización y eliminación de películas.
4. 🤖 **Endpoints de la API:**
   - Endpoint para registro de nuevos usuarios.
   - Endpoint para login de usuarios y obtención de token de acceso.
   - Endpoint para obtener la lista de películas.
   - Endpoint para obtener los detalles de una película específica. Solo los "Usuarios Regulares" deberían tener acceso a este endpoint.
   - Endpoint para crear una nueva película. Solo los "Administradores" deberían tener acceso a este endpoint.
   - Endpoint para actualizar la información de una película existente. Solo los "Administradores" deberían tener acceso a este endpoint.
   - Endpoint para eliminar una película. Solo los "Administradores" deberían tener acceso a este endpoint.
5. 💡**Pruebas unitarias:** Escribe pruebas unitarias para verificar el correcto funcionamiento de los endpoints, la lógica de negocio de la aplicación y la restricción de acceso basada en roles.

### 📎 Recursos:

- Puedes utilizar la documentación oficial de NestJS (**https://docs.nestjs.com/**) como referencia durante el desarrollo.
- Utiliza el control de versiones Git para gestionar el código fuente de la aplicación.

### ✅ Entregables:

- Repositorio de Git que contenga el código fuente de la aplicación.
- Instrucciones claras sobre cómo ejecutar y probar la aplicación localmente.

## 🔍 Criterio de Evaluación

Este test va a estar evaluado de la siguiente manera:

- 🏗️ **Diseño de Arquitectura de Backend:** Diseñar e implementar una arquitectura de aplicación utilizando NestJS.
- 🔒 **Auth Process**: Implementar la funcionalidad de autenticación y autorización utilizando JWT.
- 👥 **Role Handling:** Implementar manejo de roles y restricción de acceso basada en roles.
- 🥷 **Testing**: Escribir pruebas unitarias para verificar el correcto funcionamiento de los endpoints, la lógica de negocio y la restricción de acceso.
