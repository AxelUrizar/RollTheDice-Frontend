# ProyectoBackend_BuscadorDePeliculas

API con CRUD para la trata de un buscador de peliculas.

### App deployeada en Heroku

[URL a la aplicación](https://roll-the-dice---api.herokuapp.com/)

### Instalación 🔧

_Para instalar el proyecto deberás copiar en tu disco local el repositorio de GitHub con el siguiente comando:_

```
git clone https://github.com/AxelUrizar/RollTheDice-Backend.git
```

_Tras lo cual tendremos que installar las dependencias con:_

```
npm install
```
o

```
yarn install
```

Y por último será necesario añadir las siguientes variables de entorno en un documento ".env".

```
PORT=(Puerto en el que deseas que se ejecute la aplicación)
```
```
MONGO_URI=(Link para conectar a tu base de datos de MongoDB)
```
```
JWT_SECRET=(Palabra clave para tus tokens)
```

## Ejecutando las pruebas ⚙️

_Para probar el proyecto usaremos Postman mandando peticiones a todos los endpoints_

Endpoints Usuarios:

* Mostrar todos los usuarios: (GET "/users")

* Registrar nuevo usuario: (POST "/users/newUser") y pasamos por body con formato JSON los datos del nuevo usuario.

* Login a un usuario: (POST "/users/login") con lo que recibiremos un token para poder acceder a las funcionalidades como ver tu perfil o borrarlo.

* Mostrar tu perfil: (GET "users/profile") pasandole además un token de autentificación nos dejará acceder a nuestro perfil y ver nuestros datos.

* Editar Alias: (PUT "/users/edit")Edita el Alias del usuario que lance la petición.

* Logout Usuario: (DELETE "/users/logout") Borrará el token en uso del usuario que lance la petición.

* Logout All Usuario: (DELETE "/users/logoutAll") Borrará todos los tokens del usuario que lance la petición.

Endpoints Games: 

* Mostrar todas las partidas: (GET "/gamesHistory") Muestra todas las partidas guardadas en la base de datos

* Mostrar partidas de un usuario: (GET "/gamesHistory/userHistory") Muestra las partidas guardadas de el usuario que lance la petición.

* Nueva partida: (POST "/gamesHistory/newGame") Crea una partida con los datos que  el usuario envía a la petición.

Endpoints Admin: 

* Editar alias usuario: (PUT "/admin/edit") Edita el alias de cualquier usuario que el administrador elija.

## Construido con 🛠️

* Javascript
* Node.js
* MongoDB
* Express

## Autores ✒️

* **Axel Urizar** - [GitHub](https://github.com/AxelUrizar)