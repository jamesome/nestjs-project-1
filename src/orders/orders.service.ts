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

  async findAll() {
    return this.orderRepository.find();
  }

  async findOne(id: number) {
    return this.orderRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOneBy({ id });
    order.orderNo = updateOrderDto.orderNo;
    order.memberId = updateOrderDto.memberId;
    order.itemId = updateOrderDto.itemId;
    order.status = updateOrderDto.status;

    return await this.orderRepository.save(order);
  }

  async remove(id: number) {
    return this.orderRepository.delete(id);
  }
}
