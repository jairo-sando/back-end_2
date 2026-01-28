
🛒 API E‑commerce – Backend

API REST desarrollada con Node.js + Express + MongoDB, con autenticación JWT, manejo de roles (admin/user), carritos, productos y proceso de compra con ticket.

-Tecnologías

* Node.js

*Express

*MongoDB + Mongoose

*JWT (JSON Web Tokens)

*bcrypt

*Arquitectura MVC + Repository + DTO

-Autenticación y Roles

USER: puede ver productos, crear carrito, agregar productos y comprar.

ADMIN: puede crear, actualizar y eliminar productos.

La autenticación se realiza mediante JWT enviado en el header:

Authorization: Bearer <TOKEN>

Endpoints
