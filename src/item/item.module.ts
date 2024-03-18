import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Listing } from './entities/listing.entity';
import { Comment } from './entities/comment.entity';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  imports: [TypeOrmModule.forFeature([Item, Listing, Comment])],
})
export class ItemModule {}
