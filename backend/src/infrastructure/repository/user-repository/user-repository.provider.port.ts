import { User } from "../../../domain/entity/user";

export interface UserRepositoryProviderPort {
    save(user: User): Promise<User>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
  }