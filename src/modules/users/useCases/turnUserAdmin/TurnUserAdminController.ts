import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(404).json({ error: error.message });
      }

      return response.status(500).json({ error: "Unknown error" });
    }
  }
}

export { TurnUserAdminController };
