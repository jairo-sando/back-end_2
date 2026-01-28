
🛒 API E‑commerce – Backend

API REST desarrollada con Node.js + Express + MongoDB, con autenticación JWT, manejo de roles (admin/user), carritos, productos y proceso de compra con ticket.

* Tecnologías

-Node.js

-Express

-MongoDB + Mongoose

-JWT (JSON Web Tokens)

-bcrypt

-Arquitectura MVC + Repository + DTO

* Autenticación y Roles

USER: puede ver productos, crear carrito, agregar productos y comprar.

ADMIN: puede crear, actualizar y eliminar productos.

La autenticación se realiza mediante JWT enviado en el header:

Authorization: Bearer <TOKEN>

* Endpoints

-REGISTRO DE USUARIO

POST /api/sessions/register
 Body:
{
"first_name": "Juan",
"last_name": "Perez",
"email": "user@test.com",
"age": 30,
"password": "123456"
}

-LOGIN

POST /api/sessions/login

{
"email": "user@test.com",
"password": "123456"
}

-USUARIO ACTUAL

GET /api/sessions/current
 Header:
 Authorization: Bearer JWT_TOKEN
 Body:

-OBTENER PRODUCTOS

  GET /api/products

-CREAR PRODUCTOS (ADMIN)
  POST /api/products
  Header:
  Authorization: Bearer ADMIN_TOKEN

-ACTUALIZAR PRODUCTOS(ADMIN)
  PUT /api/products/:pid

-ELIMINAR PRODUCTOS (ADMIN)
  DELETE /api/products/:pid

-CREAR CARRITO
  POST /api/carts
  Header:
  Authorization: Bearer USER_TOKEN
  
-OBTENER CARRITO POR ID
  GET /api/carts/:cid

-AGREGAR PRODUCTO AL CARRITO
  POST /api/carts/:cid/products/:pid
  Header:
  Authorization: Bearer USER_TOKEN

-COMPRAR CARRITO
  POST /api/carts/:cid/purchase
  Header:
  Authorization: Bearer USER_TOKEN

🧪 Testing

Los endpoints fueron testeados manualmente con Postman.

👤 Autor

Jairo Sandoval 
  
 
