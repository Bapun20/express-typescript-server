# Backend Server

This is an Express server made with TypeScript that handles the backend functionality for the desktop application.

## Features

- **Ping Endpoint**: A simple endpoint to check if the server is running.
- **Submit Endpoint**: Handles the submission of form data.
- **Read Endpoint**: Retrieves a specific submission by index.
- **Delete Endpoint**: Deletes a specific submission by index.

## Installation

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

- **GET /ping**: Returns `true` if the server is running.
- **POST /submit**: Submits a new form entry.
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "1234567890",
      "github_link": "https://github.com/johndoe",
      "stopwatch_time": "00:10:00"
    }
    ```
- **GET /read?index=<index>**: Reads the form entry at the specified index.
- **DELETE /delete?index=<index>**: Deletes the form entry at the specified index.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License.
