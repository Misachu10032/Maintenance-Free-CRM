
import { injectable } from 'tsyringe';
import {  UserRepositoryProviderPort } from './user-repository.provider.port';
import { User } from '../../../domain/entity/user';

@injectable()
export class UserRepositoryProviderAdapter implements UserRepositoryProviderPort {
  private users: User[] = [];
  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find((u) => u.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((u) => u.email === email) || null;
  }
}
