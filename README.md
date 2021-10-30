# Sistema web de tienda virtual CCE :computer:

## Pasos para levantar el servicio backend :Laravel:

* **Clonar Repositorio** 
* **Ejecutar en el back: composer install** 
* **Configurar archivo ".env" con la cadena de conexión a la base de datos**  
* **Ejecutar comando para migrar la base de datos: php artisan migrate**
* **Ejecutar comando para crear datos ficticios y categorias: php artisan db:seed**
* **Ejecutar comando para correr backend: php artisan serve**

El backend se ejecutara por defecto en el puerto:8000 .


## Pasos para levantar el servicio frontend :React:

* **Clonar Repositorio** 
* **Ejecutar en el front: npm install** 
* **Configurar archivo ".env.development" con la conexión al backend/API: REACT_APP_API_HOST=http://localhost:8000/api**  
* **Ejecutar comando para correr frontend: npm start**

El frontend se ejecutara por defecto en el puerto:3000 .


## Versiones:

* **PHP: 7.2**
* **Laravel 7**

## Observaciones:

** *Se Necesita php, xammp y node.js*

## Video del funcionamiento

Puedes ver el funcionamiento del sistema haciendo clic en el siguiente enlace [Video Explicativo](https://www.youtube.com/watch?v=fLK0BMbXLAo). :white_check_mark:
