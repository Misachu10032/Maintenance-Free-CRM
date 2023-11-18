// src/application/services/customerService.ts
import { inject, injectable } from 'tsyringe';
import { User } from '../../entity/customer';
import { UserServiceProviderPort } from './user-service.provider.port';
import { UserRepositoryProviderPort } from '../../../infrastructure/repository/user-repository/user-repository.provider.port';

@injectable()
export class UserServiceProviderAdapter implements UserServiceProviderPort {
  constructor(@inject('UserRepositoryProviderAdapter') private repository: UserRepositoryProviderPort) {}

  async createUser(customerData: User): Promise<void> {
    try {
      // You can add any business logic or validation here before creating the customer
      await this.repository.save(customerData);
    } catch (error) {
      throw new Error('Failed to create a customer.');
    }
  }

  async updateDropIn(customerData: User): Promise<void> {
    try {
      const existingCustomer = await this.repository.findById(customerData.id);
     
    } catch (error) {
      throw new Error('Failed to create a customer.');
    }


    await this.repository.updateUser(customerData);
  }


  // Add more methods for managing customers as needed
}
