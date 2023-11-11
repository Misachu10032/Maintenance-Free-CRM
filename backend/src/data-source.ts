import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./domain/entity/user"


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "john222",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
})