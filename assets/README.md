# SERVIDOR PRÁCTICA #

1) Crear un archivo books.js, el cual va a tener las siguientes funciones que interactúan con el archivo .json para leer la información almacenada:
    - getAll --> Debe obtener todos los libros guardados en la base de datos.
    - getById --> Debe obtener el libro con el correspondiente id. 
    - getByName --> Debe obtener el libro con el correspondiente nombre. 
    - getByAuthor --> Debe obtener el libro con el correspondiente nombre de autor. 
    - create --> Debe crear el libro envíado por el cliente en la base de datos. (el id lo debemos crear nosotros con el módulo UUID)
    - deleteById --> Debe eliminar el libro que corresponda con el ID enviado por el cliente.
    - updateById --> Debe modificar el libro con la data que envíe el cliente por ID. (validar que las propiedades que me envíe el cliente sean validas)
<!-- {
    action: "update", body: { id: 13, name: "Nuevo nombre", author: "Tolkien"}
} -->

    EN TODOS LOS CASOS TENGO QUE VALIDAR QUE LO QUE ME ENVÍE EL CLIENTE SEA CORRECTO, CASO CONTRARIO ENVIAR UN MENSAJE DE ERROR. 
    EN TODOS LOS CASOS QUE NO SE ENCUENTREN DATOS EN LA BD ,DEBERÁ ENVIAR UN MENSAJE ACLARANDO QUE NO HAY DATOS ACORDES A LOS QUE SE SOLICITAN.

2) Crear un archivo server.js el cual, utilizando el módulo nativo "NET", se encargará de crear un servidor TCP.
   Éste deberá atender las peticiones de los clientes y definir las siguientes rutas que utilizarán las funciones previamente mencionadas:    

    - getAll, getById, getByName, getByAuthor, create, delete, update

3) Crear un archivo client.js, el cual, utilizando el módulo nativo "NET", se encargará de enviarle peticiones de información al servidor e imprimir los resultados obtenidos.
   
   <!-- --- Formato del mensaje que envía el usuario: { action: <accion a realizar>, body: <informacion complementaria que se envía segun el tipo de accion>} --- --> 

4) Aplicar el patron MVC (Usuario <--> Vista <-> Controlador <-> Modelo <--> BD).
- Modelo: Define las distintas ACCIONES que puedo realizar con la base de datos (Obtener un recurso, eliminarlo, modificarlo, crearlo) y el FORMATO que va a tener cada recurso/dato (Si es un libro las propiedades que va a tener cuando se almacene) -->

- Controlador: Es el cerebro de la aplicación. Según lo que SOLICITE el cliente se va a servir de todas las ACCIONES/FUNCIONES disponibles en el modelo para lograr un resultado final  -->

- Vistas: Es donde van a estar definidas las RUTAS de la aplicacion, de las cuales el cliente se va a poder servir. Éstas deberán utilizar las FUNCIONES definidas en el controlador -->
readme.md
3 KB