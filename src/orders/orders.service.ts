import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { EntityManager, Repository } from 'typeorm';
import { Orders } from './entities/orders.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = new Orders(createOrderDto);
    await this.entityManager.save(order);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
