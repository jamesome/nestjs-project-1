import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Orders extends AbstractEntity<Orders> {
  @Column()
  name: string;

  @Column()
  address: string;
}
