import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { OneToOne } from "typeorm/browser";
import { Delivery } from "./Delivery";
import { User } from "./User";
import { OneToMany } from "typeorm/browser";
import { Amount } from "./Amount";

export const ALLOWED_STATUS = {
  PENDING: "pending",
  DELIVERED: "delivered",
  CANCELED: "canceled",
  RETURNED: "returned",
};

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @OneToOne(() => User)
  user: User;

  @OneToOne(() => Delivery)
  delivery: Delivery;

  @Column({
    type: "enum",
    enum: Object.values(ALLOWED_STATUS),
    default: ALLOWED_STATUS.PENDING,
  })
  status: string;

  @OneToMany(() => Amount, (a) => a.order)
  amounts: Amount[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
