import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    title:string
    @Column()
    description:string
    @Column()
    instructor:string
    @Column()
    schedule:string
}
