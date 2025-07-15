# NODE - API - REST

Repositorio para trabajo final Node.JS
GitHub: Repositorio: https://github.com/damiancd/NODE-API-REST.git


# 🛠️ CRUD de Artículos con Node.js, Firestore y JWT

Este repositorio contiene una API RESTful desarrollada con **Node.js** y **Express**, que implementa un CRUD (Crear, Leer, Actualizar, Eliminar) de artículos. La base de datos utilizada es **Cloud Firestore** y la autenticación se gestiona mediante **JWT (JSON Web Tokens)**.

## 📚 Objetivo del proyecto

Desarrollar un backend que permita gestionar artículos (productos) de manera segura, con endpoints protegidos por autenticación basada en tokens.

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
├── vercel.json              # indica a Vercel cómo debe construir y enrutar tu proyecto Node.js
├── .env                     # Variables de entorno
└── package.json             # Configuración del proyecto
```

## 🌐 Despliegue en Vercel

Este proyecto está desplegado públicamente en:

🔗 **API Base URL:**  
[https://node-api-rest-xi.vercel.app/](https://node-api-rest-xi.vercel.app/)

🔐 **Login (POST):**  
[https://node-api-rest-xi.vercel.app/auth/login](https://node-api-rest-xi.vercel.app/auth/login)



## ✅ Estado del proyecto

✔️ CRUD funcional
✔️ Probado con Postman 
✔️ Conectado a Firestore  
✔️ Autenticación con JWT  
✔️ Deploy en Vercel

---

## 📬 Autor

**Damian Diaz**  
---