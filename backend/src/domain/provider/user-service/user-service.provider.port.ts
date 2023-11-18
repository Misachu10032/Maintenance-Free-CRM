import { User } from '../../entity/user';




export interface UserServiceProviderPort  {
    createUser(input: User): Promise<void>;

}
export type updateDropInInput =  {
    userId: string;
    dropInChange: number;
    date: Date;
  };
  