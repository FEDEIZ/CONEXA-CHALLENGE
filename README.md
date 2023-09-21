# CONEXA_CHALLENGE_API

API REST PARA EL CHALLENGE DE CONEXA

.ENV PARA VARIABLES DE ENTORNO:

```
JWT_SECRET=fede1993
SALT=10
MONGO_URI=mongodb+srv://admin:admin@fedeiz.xummah6.mongodb.net/conexa
STARWARS_API=http://swapi.dev/api
PORT=8000
```

---

Deploy de api

https://conexa.up.railway.app

---

Para levantar el servidor en modo desarrollo correr:

```
npm i
```
** Crear archivo .env con las variables de entorno descriptas

```
npm run dev
```

---

Para probar los endpoints correspondientes al challenge usar los doucmentos del indice:

# Indice:

- [Autenticacion y Registro](./docs/auth.md)
- [Films](./docs/films.md)

\*\* Se puede usar tambien la documentacion generada por swagger mediante la ruta `localhost:8000/api`
