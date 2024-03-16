import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const dataSourceOptions: DataSourceOptions = {
      type: 'mysql',
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USERNAME'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),
      // retryAttempts: 2, // DB connection 시도 횟수
      synchronize: true, // 서버가 구동될 떄, 테이블 자동생성
      logging: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
      migrations: ['src/database/migrations/*.ts'],
      // migrations: [__dirname + '/../**/**/*.{.ts,.js}'],
      migrationsTableName: 'migrations',
    };

    const dataSource = await new DataSource(dataSourceOptions).initialize();
    return {
      ...dataSourceOptions,
      dataSource,
    } as TypeOrmModuleOptions;
  }
}
