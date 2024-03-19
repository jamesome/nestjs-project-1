import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { EntityManager, Repository } from 'typeorm';
import { Members } from './entities/members.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Members)
    private readonly memberRepository: Repository<Members>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const member = new Members(createMemberDto);
    member.id = 1;
    await this.entityManager.save(member);
  }

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
