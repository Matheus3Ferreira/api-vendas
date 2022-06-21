import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const userAuth = new CreateSessionService();

        const user = await userAuth.execute({ email, password });

        return response.json(user)
    }
}