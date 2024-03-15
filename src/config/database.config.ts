import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { join } from 'path';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USERNAME'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),
      retryAttempts: 2, // DB connection 시도 횟수
      synchronize: true, // 서버가 구동될 떄, 테이블 자동생성
      logging: true,
      entities: [join(__dirname, '..', 'src/**/*.entity{.ts,.js}'), User],
      autoLoadEntities: true,
      migrations: ['src/database/migrations/*.ts'],
      migrationsTableName: 'migrations',
    };
  }
}
