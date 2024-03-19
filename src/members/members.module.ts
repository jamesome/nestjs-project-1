import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from './entities/members.entity';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [TypeOrmModule.forFeature([Members])],
})
export class MembersModule {}
