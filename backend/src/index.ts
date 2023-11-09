



import 'reflect-metadata';
import express,{ Application } from 'express';
import './configuration/dependency-registries/dependency.config'; // Import the dependency configuration
import configureRoutes from './application/controller/routes';
import { AppDataSource } from './data-source';

const PORT = process.env.PORT || 3000;



const createApp = async (): Promise<Application> => {

  // Initialize the TypeORM connection (replace with your database configuration)
  AppDataSource.initialize()
  // Create an Express application
  const app = express();




  // Create the InversifyExpressServer and set up controllers
  configureRoutes(app);
  return app;
}

createApp().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
