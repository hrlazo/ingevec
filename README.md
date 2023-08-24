## Resumen
El proyecto funciona sin ningun problema en local, sin embargo al subir el proyecto a firebase nos encontramos con un error en la petición http a la api que se entro debido a que no incluye un certificado SSL generando un error de Mixed Block, este error se puede solucionar al crear una función dentro de Firebase, pero para poder ingresar a esa funcionalidad lamentablemente se debe cancelar una suscripción.
## Demo
Puedes acceder a la versión del proyecto subida a Firebase a través de este enlace: [Firebase](https://api-ip-angular.firebaseapp.com/)

## Servidor de desarrollo
Si deseas ejecutar el proyecto localmente, sigue estos pasos:

    1- Ejecuta npm install para instalar las dependencias.
    2- Luego, ejecuta ng serve para iniciar un servidor de desarrollo.
    3- Accede a http://localhost:4200/ en tu navegador. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

Este proyecto fue generado usando Angular CLI versión 16.2.0. ¡No dudes en agregar tildes y comas según tu preferencia!
