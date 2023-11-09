// src/application/services/customerService.ts
import { inject, injectable } from 'tsyringe';
import { User } from '../../entity/customer';
import { UserServiceProviderPort } from './user-service.provider.port';

@injectable()
export class UserServiceProviderAdapter implements UserServiceProviderPort {
  constructor(@inject('UserRepositoryProviderAdapter') private repository: UserServiceProviderPort) {}

  async createUser(customerData: User): Promise<void> {
    try {
      // You can add any business logic or validation here before creating the customer
      await this.repository.createUser(customerData);
    } catch (error) {
      throw new Error('Failed to create a customer.');
    }
  }


  // Add more methods for managing customers as needed
}
