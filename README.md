# Contenidos
- [Configuracion](#Configuración)
- [Ejecutar](#Ejecutar)
- [Estructura de carpetas](#Project-folder-structure)
- [Features](#Features)
#


# KIANFilms
Es una aplicación web hecha por [Ángel Rodríguez](https://www.linkedin.com/) y [Jarki Melendez](https://www.linkedin.com/in/jarki-melendez/) para el "alquiler" de películas online y administración de pedidos

Está hecha con:
- React 17 con Redux
- NodeJs con express
- Mongo con mongoose
#


## Configuración
- Backend: Descargar e instalar el repositorio de [backend](https://github.com/jarki7777/API_Rest).

El servidor de mongo correrá por defecto en el puerto 4000 (configurable en las variables de entorno).
- Frontend: Descargar e instalar este repositorio

        npm i

Por defecto el servidor de react correrá en el puerto 3000 si está disponible

#

## Run

En el directorio raíz:

        npm start

Se abrirá una nueva pestaña del explorador con la dirección: http://localhost:3000/

Ya puedes empezar a usar la app
#


## Estructura de carpetas del proyecto
                ├───public
                └───src
                        ├───public
                        │   └───img
                        └───src
                        ├───Components
                        │   ├───carrousel
                        │   ├───carrouselMovies
                        │   ├───dashboardHeader
                        │   ├───footer
                        │   ├───header
                        │   ├───Login
                        │   ├───MovieRentView
                        │   ├───orderCard
                        │   ├───Register
                        │   ├───searchCard
                        │   └───searchInput
                        ├───Containers
                        │   ├───Admin
                        │   ├───changeView
                        │   ├───Dashboard
                        │   ├───Home
                        │   └───Main
                        ├───Services
                        ├───Store
                        │   ├───actions
                        │   └───reducers
                        └───util
#

## Features

- Main: la página principal contiene los componentes de login y register y para poder acceder a la aplicación se debe estar registrado y loguearse 

Login de usuarios
![localhost_3000_ (1)](https://user-images.githubusercontent.com/76188418/116827221-33f4ec00-ab98-11eb-861e-cb49975b1dd2.png)

Registro de usuarios
![localhost_3000_](https://user-images.githubusercontent.com/76188418/116827220-335c5580-ab98-11eb-8482-a497fc30458e.png)

 - Home: Se muestran carruseles de películas de la base de datos por género. Al hacer click en cada una se desplega un modal con más información acerca de la película y la posibildad de alquilarla o verla en los pedidos si ya está alquilada. Haciendo click en la lupa se puede hacer una búsqueda en toda la base de datos de películas por género, reparto, director o título

 ![localhost_3000_home](https://user-images.githubusercontent.com/76188418/116827219-335c5580-ab98-11eb-95d9-3a909fd236ec.png)

 - Dashboard clientes: Los usuarios de tipo cliente pueden acceder a sus pedidos e información haciendo click en el ícono de perfil en la esquina superior derecha

 ![localhost_3000_home (1)](https://user-images.githubusercontent.com/76188418/116827218-32c3bf00-ab98-11eb-8fa1-214269f32ef9.png)

- Panel de administración: Los usuarios administradores al hacer click en el ícono en la esquina superior derecha acceden a un dashboard de búsqueda de clientes y sus pedidos

![localhost_3000_home (2)](https://user-images.githubusercontent.com/76188418/116827216-32c3bf00-ab98-11eb-8a25-4b6a2220604b.png)

![localhost_3000_home (3)](https://user-images.githubusercontent.com/76188418/116827215-322b2880-ab98-11eb-96a4-e56a8bbf52c6.png)

#


## Authors

[Ángel Rodríguez](https://www.linkedin.com/)

[Jarki Melendez](https://www.linkedin.com/in/jarki-melendez/)

[TOP](#Table-of-contents)