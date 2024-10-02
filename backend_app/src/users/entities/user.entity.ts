
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column()
    password: string;

}
