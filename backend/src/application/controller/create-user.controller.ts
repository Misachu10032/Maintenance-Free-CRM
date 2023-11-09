// controllers/UserController.ts

import { Request, Response } from 'express';
import { singleton, inject } from 'tsyringe';
import { User } from '../../domain/entity/customer';
import { UserServiceProviderPort } from '../../domain/provider/user-service/user-service.provider.port';


@singleton()
export default class UserController {
  constructor(@inject('UserServiceProviderAdapter') private userServiceProvider: UserServiceProviderPort) {}


  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const newUser: User = req.body; // Assuming user data is in the request body
      const createdUser = await this.userServiceProvider.createUser(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }




}
