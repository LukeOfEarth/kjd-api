import axios from "axios";
import express, {Request, Response} from "express";

export const itemsRouter = express.Router();

itemsRouter.get("/items", async (req: Request, res: Response) => {
    try {
        const items = await axios.get("https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/");
        res.status(200).json(items.data);
    } catch (e) {
        res.status(404).send(e);
    }
});