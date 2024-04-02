import { AbstractEntity } from 'src/database/abstract.entity';
import { Orders } from 'src/orders/entities/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Members extends AbstractEntity<Members> {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => Orders, (orders) => orders.member, { cascade: true })
  orders: Orders[];
}
