# Films

\*\* Importante: En todas las peticiones a /films debe incorporarse el token a la cabecera de la peticion con el formato:

`Bearer {{token}}`

\*\* Para ingresar como administrador usar el siguiente usuario:

email: `admin@conexa.com`

password: `conexA12345!`

## GET `http://localhost:8000/film`

Endpoint encargado de buscar todas las peliculas

---

Respuesta en caso de éxito:

```json
[
    {
        "_id": "64dfe761d17b2f349c6b75a4",
        "title": "The Empire Strikes Back",
        "episode_id": "5",
        "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        "director": "Irvin Kershner",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1980-05-17T00:00:00.000Z",
        "species": [
            "https://swapi.dev/api/species/1/",
            "https://swapi.dev/api/species/2/",
            "https://swapi.dev/api/species/3/",
            "https://swapi.dev/api/species/6/",
            "https://swapi.dev/api/species/7/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/3/",
            "https://swapi.dev/api/starships/10/",
            "https://swapi.dev/api/starships/11/",
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/15/",
            "https://swapi.dev/api/starships/17/",
            "https://swapi.dev/api/starships/21/",
            "https://swapi.dev/api/starships/22/",
            "https://swapi.dev/api/starships/23/"
        ],
        "vehicles": [
            "https://swapi.dev/api/vehicles/8/",
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/16/",
            "https://swapi.dev/api/vehicles/18/",
            "https://swapi.dev/api/vehicles/19/",
            "https://swapi.dev/api/vehicles/20/"
        ],
        "characters": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/14/",
            "https://swapi.dev/api/people/18/",
            "https://swapi.dev/api/people/20/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/22/",
            "https://swapi.dev/api/people/23/",
            "https://swapi.dev/api/people/24/",
            "https://swapi.dev/api/people/25/",
            "https://swapi.dev/api/people/26/"
        ],
        "planets": [
            "https://swapi.dev/api/planets/4/",
            "https://swapi.dev/api/planets/5/",
            "https://swapi.dev/api/planets/6/",
            "https://swapi.dev/api/planets/27/"
        ],
        "createdAt": "2023-08-18T21:49:03.599Z",
        "__v": 0
    },
    ......,
]
```

Algunas respuestas de error:

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

---

## POST `http://localhost:8000/film`

Endpoint encargado de crear una pelicula
Rol autorizado: administrador -- USAR USUARIO ADMIN

### Parámetros body

| param         | descripción              | obligatorio |
| ------------- | ------------------------ | ----------- |
| title         | titulo de la pelicula    | SI          |
| episode_id    | numero de episodio       | SI          |
| opening_crawl | texto de apertura        | SI          |
| director      | director de la pelicula  | SI          |
| producer      | productor de la pelicula | SI          |
| release_date  | fecha de lanzamiento     | SI          |
| planets       | arreglos de planetas     | NO          |
| species       | arreglos de especies     | NO          |
| starships     | arreglos de naves        | NO          |
| vehicles      | arreglos de vehiculos    | NO          |
| characters    | arreglos de personajes   | NO          |

### Ejemplo Body

```json
{
  "title": "Otro Titulo",
  "episode_id": "25",
  "opening_crawl": "djklsajkgfjaipfdjapiodjwqopjdopw",
  "director": "Yoo 2",
  "producer": "Tambien yo",
  "release_date": "2023-08-17",
  "planets": ["asd", "as"]
}
```

## PATCH `http://localhost:8000/film/{{filmId}}`

Endpoint encargado de modificar una pelicula
Rol autorizado: administrador -- USAR USUARIO ADMIN

### Parámetros body

| param         | descripción              | obligatorio |
| ------------- | ------------------------ | ----------- |
| title         | titulo de la pelicula    | NO          |
| episode_id    | numero de episodio       | NO          |
| opening_crawl | texto de apertura        | NO          |
| director      | director de la pelicula  | NO          |
| producer      | productor de la pelicula | NO          |
| release_date  | fecha de lanzamiento     | NO          |
| planets       | arreglos de planetas     | NO          |
| species       | arreglos de especies     | NO          |
| starships     | arreglos de naves        | NO          |
| vehicles      | arreglos de vehiculos    | NO          |
| characters    | arreglos de personajes   | NO          |

### Ejemplo ruta

`local/film/64e26ccd4cc4e7e3b11ae7e5`

### Ejemplo Body

```json
{
  "title": "Titulo modificado"
}
```

Respuesta en caso de éxito:

`true`

Respuesta en caso contrario:

```json
{
  "statusCode": 409,
  "message": "Could not read the film: Not Found"
}
```

## DELETE `http://localhost:8000/film/{{filmId}}`

Endpoint encargado de eliminar una pelicula
Rol autorizado: administrador -- USAR USUARIO ADMIN

### Ejemplo ruta

`local/film/64e26ccd4cc4e7e3b11ae7e5`

Respuesta en caso de éxito:

`true`

Respuesta en caso contrario:

```json
{
  "statusCode": 409,
  "message": "Could not read the film: Not Found"
}
```

## GET `http://localhost:8000/film/{{filmId}}`

Endpoint encargado de leer el detalle de una pelicula
Rol autorizado: USER -- Usar cualquier usuario que no sea el de ADMIN como por ejemplo:

email: `user@conexa.com`,
password: `conexA12345!`

### Ejemplo ruta

`local/film/64dfe761d17b2f349c6b75a4`

Respuesta en caso de éxito:

```json
{
  "_id": "64dfe761d17b2f349c6b75a4",
  "title": "The Empire Strikes Back",
  "episode_id": "5",
  "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
  "director": "Irvin Kershner",
  "producer": "Gary Kurtz, Rick McCallum",
  "release_date": "1980-05-17T00:00:00.000Z",
  "species": [
    "https://swapi.dev/api/species/1/",
    "https://swapi.dev/api/species/2/",
    "https://swapi.dev/api/species/3/",
    "https://swapi.dev/api/species/6/",
    "https://swapi.dev/api/species/7/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/3/",
    "https://swapi.dev/api/starships/10/",
    "https://swapi.dev/api/starships/11/",
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/15/",
    "https://swapi.dev/api/starships/17/",
    "https://swapi.dev/api/starships/21/",
    "https://swapi.dev/api/starships/22/",
    "https://swapi.dev/api/starships/23/"
  ],
  "vehicles": [
    "https://swapi.dev/api/vehicles/8/",
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/16/",
    "https://swapi.dev/api/vehicles/18/",
    "https://swapi.dev/api/vehicles/19/",
    "https://swapi.dev/api/vehicles/20/"
  ],
  "characters": [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/3/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/5/",
    "https://swapi.dev/api/people/10/",
    "https://swapi.dev/api/people/13/",
    "https://swapi.dev/api/people/14/",
    "https://swapi.dev/api/people/18/",
    "https://swapi.dev/api/people/20/",
    "https://swapi.dev/api/people/21/",
    "https://swapi.dev/api/people/22/",
    "https://swapi.dev/api/people/23/",
    "https://swapi.dev/api/people/24/",
    "https://swapi.dev/api/people/25/",
    "https://swapi.dev/api/people/26/"
  ],
  "planets": [
    "https://swapi.dev/api/planets/4/",
    "https://swapi.dev/api/planets/5/",
    "https://swapi.dev/api/planets/6/",
    "https://swapi.dev/api/planets/27/"
  ],
  "createdAt": "2023-08-18T21:49:03.599Z",
  "__v": 0
}
```

PARA RESETEAR LA BASE DE DATOS DE PELICULA CON LA API DE STARWARS:

## POST `http://localhost:8000/database/reset`

\*\* Debe ser usuario administrador!
