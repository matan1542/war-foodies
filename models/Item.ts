import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { OneToOne } from "typeorm/browser";
import Category from "./Category";

@Entity()
export class Item {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: number;

  @OneToOne(() => Category)
  category: Category;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
