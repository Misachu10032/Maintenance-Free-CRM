
import { container } from 'tsyringe';
import { UserRepositoryProviderPort } from '../../infrastructure/repository/user-repository/user-repository.provider.port';
import { UserRepositoryProviderAdapter } from '../../infrastructure/repository/user-repository/user-repository.provider.adapter';
import { UserServiceProviderPort } from '../../domain/provider/user-service/user-service.provider.port';
import { UserServiceProviderAdapter } from '../../domain/provider/user-service/user-service.provider.adapter';

container.register<UserRepositoryProviderPort>('UserRepositoryProviderAdapter', { useClass: UserRepositoryProviderAdapter });
container.register<UserServiceProviderPort>('UserServiceProviderAdapter', { useClass: UserServiceProviderAdapter });
