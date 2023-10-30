import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Item } from "./Item";
import { Order } from "./Order";

@Entity()
export class Amount {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @OneToOne(() => Item)
  item: Item;

  @OneToOne(() => Order)
  order: Order;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
