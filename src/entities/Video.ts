import { Entity, Column, CreateDateColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column()
    name: string;

    @Column()
    duration: number;

    @Column()
    description: string;

    @Column()
    category_id: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category?: Category;

    @CreateDateColumn()
    created_at?: Date;
}