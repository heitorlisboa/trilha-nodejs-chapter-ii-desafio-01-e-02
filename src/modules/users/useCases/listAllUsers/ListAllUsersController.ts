import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (typeof user_id !== "string") {
      return response
        .status(400)
        .json({ error: "Invalid parameter! `user_id` must be a string" });
    }

    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(allUsers);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }

      return response.status(500).json({ error: "Unknown error" });
    }
  }
}

export { ListAllUsersController };
