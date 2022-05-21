import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailIsAlreadyTaken = this.usersRepository.findByEmail(email);

    if (emailIsAlreadyTaken) {
      throw new Error("Email is already taken");
    }

    const user = this.usersRepository.create({
      name,
      email,
    });

    return user;
  }
}

export { CreateUserUseCase };
