# LPCPO
Este es un experimento de proyecto que involucra un headless backend hecho con `nodejs` y `expressjs` cuyo front (del backend) está hecho con `reactjs` con la finalidad de que se puedan tener administradores para bloquear usuarios, eliminar entradas, etc. 

De igual forma maneja el frontend de la aplicación `reactjs` cuyo contenido está bloqueado con un login por lo que se crea totalmente sin el uso de `nextjs`.

###### TREE

```shell
| - backend
|	| - headless (NPM)
|	| - admin (YARN)
|
| - frontend (YARN)
```

Las carpetas creadas de front utilizan `create-react-app` por lo que se usa `YARN` para tener congruencia y el headless usa NPM por ser de mi preferencia.

#### Funciones de backend

###### Usuarios

```
/register
```
Un usuario se tiene que registrar a través de Facebook para poder tener un perfil real, no pueden usar perfiles sin contenido real de la persona (esta información no será expuesta en el sitio, solo se usará como precaución o el uso de una identificación oficial).

```
/acceptance
```
No por registrarte se le dará permiso al usuario para poder ingresar al sitio. Necesitará aceptar el acuerdo de términos y condiciones, subir una identificación, tal vez contestar unas preguntas y después será aceptado por algún administrador. **Por seguridad, esto será un paso manual**.

```
/delete
```
Un usuario se podrá eliminar en caso de que este rompa las reglas del sitio y la eliminación del usuario será evaluada en cada caso. Una vez eliminada solo un súper administrador podrá quitar de la lista negra al usuario eliminado para que pueda tener acceso.

```
/suspention
```
Antes de llegar a eliminar una cuenta se podrá poner en un período de prueba en la cual, a consideración del administrador se le podrá quitar la habilidad de postear, comentar, mandar mensajes (cuando esté habilitada la función) e incluso de iniciar sesión en el sitio durante un período de tiempo.

###### As user

```
/post
```
Cada usuario podrá crear posts y subir imágenes o videos, solo podrá elegir guardar un máximo de 5 videos en su perfil para que se queden guardados y los que no quiera conservar se eliminarán automáticamente del servidor. Las imágenes no tendrán un límite pero se procesarán para evitar que ocupen mucho espacio en el servidor. Los usuarios podrán compartir posts de forma anónima para proteger su identidad pero nosotros guardaremos la identidad de la persona que postea para que pueda recibir notificaciones de su publicación. Los posts anónimos no aparecerán en los perfiles de los usuarios de forma pública. Solo el mismo usuario podrá ver sus propios posts anónimos ni los administradores podrán ver esta información. Solo los súperadmins.

```
/comment
```
Cada post llevará su sección de comentarios en las que podrá mencionar a otro usuario. 

```
/profile
```
Cada usuario tendrá su perfil donde el/ella podrá elegir qué información será pública, administrar sus videos seleccionados para conservar, añadir links a sus redes sociales, sitios, etc. 

#### Funciones que tendrá en su primer release

```
/likes-comment-fav
```
Cada post se podrá comentar, darle una reacción y decidir guardar en tus favoritos, que podrás consular en tu perfil y esta sección de favoritos lo podrán ver otros usuarios.

```
/popular-post-of-the-day
``` 
Cada 24 hrs se iniciará con la evaluación de seleccionar los posts con más interacción (likes y comments) del día

```
/rules
```
Las reglas con los términos legales y de privacidad correspondientes.

```
/themes
```
Los temas de la semana para que compartar contenido relacionado al mismo tema de la semana. Los administradores tendrán la posibilidad de eliminar posts o censurarlos en caso de que rompan las reglas.

