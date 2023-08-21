# Autenticacion y Registro

---

Usuario administrador previamente cargado en la base de datos:

email: admin@conexa.com
password: conexA12345!

## POST `http://localhost:8000/auth/signUp`

Endpoint encargado de registrar un nuevo usuario

### Parámetros body

| param    | descripción                |
| -------- | -------------------------- |
| email    | email del usuario          |
| userName | nombre de usuario          |
| password | contraseña del usuario     |
| confirm  | confirmacion de contraseña |

### Ejemplo Body

```json
{
  "email": "user@conexa.com",
  "userName": "user",
  "password": "userconexA12345!",
  "confirm": "userconexA12345!"
}
```

---

Respuesta en caso de éxito:

```json
{
  "email": "user3@conexa.com",
  "userName": "user2",
  "password": "",
  "role": "USER",
  "createdAt": "2023-08-20T18:34:38.730Z",
  "_id": "64e25d285ee194d6472fd811",
  "__v": 0
}
```

Algunas respuestas de error:

```json
{
  "statusCode": 400,
  "message": ["The passwords doesnt match"],
  "error": "Bad Request"
}
```

```json
{
  "statusCode": 409,
  "message": "Ya existe un usuario con ese email",
  "error": "Conflict"
}
```

## POST `http://localhost:8000/auth/signIn`

Endpoint encargado de loguear un usuario

### Parámetros body

| param    | descripción            |
| -------- | ---------------------- |
| email    | email del usuario      |
| password | contraseña del usuario |

### Ejemplo Body

```json
{
  "email": "user@conexa.com",
  "password": "userconexA12345!"
}
```

---

Respuesta en caso de éxito:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGRkMzE3ZmRmZWYxYTM3Yjc1NGU3NDkiLCJ1c2VybmFtZSI6InVzZXIiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY5MjU1ODAyNywiZXhwIjoxNjkyNTYxNjI3fQ.XUml2ka5GeY8sq-UCFFkjd_kOHd4svapsbng6k-P-LE"
}
```

Algunas respuestas de error:

```json
{
  "statusCode": 404,
  "message": "Not Found"
}
```

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

---
