import { AbstractEntity } from 'src/database/abstract.entity';
import { Members } from 'src/members/entities/members.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Orders extends AbstractEntity<Orders> {
  @Column({ name: 'order_no' })
  orderNo: string;

  @Column({ name: 'member_id', comment: '고객 일련번호' })
  memberId: number;

  @Column({ name: 'item_id' })
  itemId: number;

  @Column({ comment: '주문상태' })
  status: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date;

  @ManyToOne(() => Members, (members) => members.orders)
  @JoinColumn({ name: 'member_id', referencedColumnName: 'id' })
  member: Members;
}
