import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entities/orders.entity';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [TypeOrmModule.forFeature([Orders])],
})
export class OrdersModule {}
