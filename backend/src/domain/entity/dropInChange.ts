import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user';


@Entity()
export class DropInChange {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'integer' })
  numberAdded!: number;

  @CreateDateColumn()
  changeDate!: Date;

  @Column({ type: 'varchar', length: 50 }) // Define the maximum length as per your type
  type!: string;

  @ManyToOne(() => User, (user: { dropInChanges: any; }) => user.dropInChanges)
  user!: User;
}