import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Members {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  constructor(members: Partial<Members>) {
    Object.assign(this, members);
  }
}
