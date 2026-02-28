## Project Description
[cite_start]This project is a basic web application built using **Node.js (v24.11.1)** and the **Express.js** framework[cite: 3, 35]. It demonstrates the fundamental concepts of server-side development, including routing, handling static files, implementing middleware, and managing basic API endpoints.

## Features Implemented
* [cite_start]**Static File Serving:** Serves an `index.html` file from a `public` directory[cite: 32, 46].
* [cite_start]**Custom Routes:** * `GET /`: Basic "Hello World" response[cite: 43, 44].
    * [cite_start]`GET /about`: A dedicated About page[cite: 54, 56].
    * [cite_start]`GET /items`: Returns a JSON list of items[cite: 101, 103].
    * [cite_start]`POST /items`: Allows adding new items to the list[cite: 146, 148].
* **Middleware:**
    * [cite_start]**Logging Middleware:** Logs every incoming request method and URL to the console[cite: 64, 72].
    * [cite_start]**Error Handling:** A custom middleware to catch and report server-side errors[cite: 86, 88].
* [cite_start]**Form Interaction:** A front-end HTML form that allows users to dynamically add items to a list via the Fetch API[cite: 106, 115, 127].

## Project Structure
```text
SIMPLE-WEB-APP-LOYOLA/
├── public/
│   └── index.html    # Front-end user interface 
├── index.js          # Main server application file 
├── package.json      # Node.js project configuration 
└── node_modules/     # Project dependencies (Express) 