# Express TypeScript Server

This is an Express server built with TypeScript, designed to handle backend functionality for a desktop application.

## Features

- **Ping Endpoint**: A simple endpoint to check if the server is running.
- **Submit Endpoint**: Handles the submission of form data.
- **Read Endpoint**: Retrieves a specific submission by index.
- **Delete Endpoint**: Deletes a specific submission by index.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 6 or later)

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/Bapun20/express-typescript-server.git
    ```

2. Navigate to the project directory:

    ```sh
    cd express-typescript-server
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Start the server:

    ```sh
    npm run dev
    ```

## Endpoints

### GET /ping

- **Description**: Returns `true` if the server is running.
- **Response**:
  ```json
  true
