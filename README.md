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

    ```
    git clone https://github.com/Bapun20/express-typescript-server.git
    ```

2. Navigate to the project directory:

    ```
    cd express-typescript-server
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Start the server:

    ```
    npm run dev
    ```

## Endpoints

### GET /ping

- **Description**: Returns `true` if the server is running.
- **Response**:
  ```json
  true

POST /submit
Description: Submits a new form entry.
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "github_link": "https://github.com/johndoe",
  "stopwatch_time": "00:10:00"
}
Response:
json
Copy code
{
  "message": "Submission saved successfully"
}
GET /read
Description: Reads the form entry at the specified index.
Query Parameters:
index (number): The index of the submission to read.
Response:
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "github_link": "https://github.com/johndoe",
  "stopwatch_time": "00:10:00"
}
DELETE /delete
Description: Deletes the form entry at the specified index.
Query Parameters:
index (number): The index of the submission to delete.
Response:
json
Copy code
{
  "message": "Submission deleted successfully"
}
Project Structure
express-typescript-server/
├── node_modules/
├── src/
│   ├── routes.ts
│   └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
Running the Server
Start the development server:


npm run dev
The server will be running on http://localhost:3000.

### Ensure Backend Code Has All Required Endpoints

Here's the complete `src/routes.ts` file to 

```typescript
import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const dbPath = path.join(__dirname, '..', 'db.json');

// Ensure the db.json file exists
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ submissions: [] }, null, 2));
}

router.get('/ping', (req: Request, res: Response) => {
    res.send(true);
});

router.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const submission = { name, email, phone, github_link, stopwatch_time };

    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    db.submissions.push(submission);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({ message: 'Submission saved successfully' });
});

router.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string);
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    if (index >= 0 && index < db.submissions.length) {
        res.json(db.submissions[index]);
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

router.delete('/delete', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string);
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    if (index >= 0 && index < db.submissions.length) {
        db.submissions.splice(index, 1);
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        res.json({ message: 'Submission deleted successfully' });
    } else {
        res.status(404).json({ error: 'Submission not found' });
    }
});

export default router;
