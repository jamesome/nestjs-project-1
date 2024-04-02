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
    await this.entityManager.save(member);
  }

  async findAll() {
    return this.memberRepository.find();
  }

  async findOne(id: number) {
    return this.memberRepository.findOne({
      where: { id },
      relations: { orders: true },
    });
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const member = await this.memberRepository.findOneBy({ id });
    member.name = updateMemberDto.name;
    member.address = updateMemberDto.address;

    await this.memberRepository.save(member);
  }

  async remove(id: number) {
    return this.memberRepository.delete(id);
  }
}
