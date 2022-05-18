import express, {Request, Response} from "express";

export const app: express.Express = express();

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!')
})