// routes.ts

import { Application } from 'express';
import { container } from 'tsyringe';
import UserController from './create-user.controller';

export default function configureRoutes(app: Application): void {
  const userController = container.resolve(UserController);


  // Define your routes here

  app.post('/api/users', (req, res) => userController.createUser(req, res));
  // app.get('/api/products', (req, res) => productController.getProducts(req, res));
  // app.post('/api/products', (req, res) => productController.createProduct(req, res));

  // Add more routes and controllers as needed
}
