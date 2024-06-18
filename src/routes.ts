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

    res.send('Submission saved successfully');
});

router.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string);
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    if (index >= 0 && index < db.submissions.length) {
        res.json(db.submissions[index]);
    } else {
        res.status(404).send('Submission not found');
    }
});

router.delete('/delete', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string);
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    if (index >= 0 && index < db.submissions.length) {
        db.submissions.splice(index, 1);
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        res.send('Submission deleted successfully');
    } else {
        res.status(404).send('Submission not found');
    }
});

export default router;
