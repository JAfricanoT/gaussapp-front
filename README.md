# Gauss App Frontend

Esta aplicacion web fue diseñada para servir de interfaz del API de [Gauss App](https://github.com/gusaln/metodos-numericos) por lo cual para que funcione correctamente primero se debe inicializar el servidor de la API.

## Back-end

1. Instalar las dependencias

    ```shell
    pip install -r backend/requirements.txt
    ```

2. Correr

    ```shell
    uvicorn --app-dir backend main:app --reload
    ```

## Front-end

1. Instalar las dependencias

    ```bash
    bun install
    # o
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

2. Correr

    ```bash
    bun dev
    # o
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```

Abrir la [aplicacion web en http://localhost:3000](http://localhost:3000) en el navegador.