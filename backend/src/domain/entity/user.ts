import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { DropInChange } from './dropInChange';




@Entity()
@Unique(['tag_number', 'phone','email'])
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 5, nullable: false })
  tag_number!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  first_name!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  last_name!: string;

  @Column({ type: 'varchar', length: 15, unique: true, nullable: false })
  phone!: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email!: string;
  @Column({ type: 'date', nullable: true })
  birthday!: Date;

  @Column({ type: 'varchar', length: 4, nullable: false })
  dropInA!: number;

  @Column({ type: 'varchar', length: 4, nullable: false })
  dropInB!: number;

  @OneToMany(() => DropInChange, (change: { user: any; }) => change.user)
  dropInChanges!: DropInChange[];
}
