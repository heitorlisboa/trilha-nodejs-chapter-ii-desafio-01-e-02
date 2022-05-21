import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public name: string;
  public admin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor() {
    this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
