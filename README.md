# NODE - API - REST

Repositorio para trabajo final Node.JS
GitHub: Repositorio: https://github.com/damiancd/NODE-API-REST.git


# 🛠️ CRUD de Artículos con Node.js, Firestore y JWT

Este repositorio contiene una API RESTful desarrollada con **Node.js** y **Express**, que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) de artículos. La base de datos utilizada es **Cloud Firestore** y la autenticación se gestiona mediante **JWT (JSON Web Tokens)**.

## 📚 Objetivo del proyecto

Desarrollar un backend que permita gestionar artículos (productos) de manera segura, con endpoints protegidos por autenticación basada en tokens. El proyecto es útil como base para un e-commerce, sistema de inventario o práctica de arquitectura backend moderna.

## 🚀 Endpoints disponibles

| Método | Ruta                       | Descripción                          | Autenticación |
|--------|----------------------------|--------------------------------------|----------------|
| GET    | `/products`                | Listar todos los productos           | ✅ Sí          |
| GET    | `/products/:id`            | Obtener un producto por ID           | ✅ Sí          |
| POST   | `/products/create`         | Crear un nuevo producto              | ✅ Sí          |
| PUT    | `/products/:id`            | Reemplazar completamente un producto | ✅ Sí          |
| PATCH  | `/products/:id`            | Actualizar parcialmente un producto  | ✅ Sí          |
| DELETE | `/products/:id`            | Eliminar un producto                 | ✅ Sí          |
| POST   | `/auth/login`              | Obtener token JWT                    | ❌ No          |

---

## 🛠️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [jsonwebtoken (JWT)](https://github.com/auth0/node-jsonwebtoken)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://github.com/expressjs/cors)

---

## 📁 Estructura del proyecto

```
├── controllers/             # Controladores de rutas
├── models/                  # Interacción con Firestore
├── routes/
│   ├── products.router.js   # Rutas de productos
│   └── auth.routes.js       # Rutas de autenticación
├── middlewares/
│   └── authentication.js    # Middleware JWT
├── index.js                 # Punto de entrada principal
├── .env                     # Variables de entorno y Conexión a Firestore
└── package.json             # Configuración del proyecto
```

## ✅ Estado del proyecto

✔️ CRUD funcional  
✔️ Conectado a Firestore  
✔️ Autenticación con JWT  
✔️ Probado con Postman

---

## 📬 Autor

**Damian Diaz**  
---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos o de desarrollo. Si lo utilizás, se agradece la mención 😉
