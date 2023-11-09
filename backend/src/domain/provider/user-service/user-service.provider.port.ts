import { User } from '../../entity/customer';




export interface UserServiceProviderPort  {
    createUser(input: User): Promise<void>;
}
