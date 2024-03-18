import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow<string>('DATABASE_HOST'),
  port: configService.getOrThrow<number>('DATABASE_PORT'),
  database: configService.getOrThrow<string>('DATABASE_NAME'),
  username: configService.getOrThrow<string>('DATABASE_USERNAME'),
  password: configService.getOrThrow<string>('DATABASE_PASSWORD'),
  // synchronize: true, // 서버가 구동될 떄, 테이블 자동생성
  // logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../**/migrations/*.js'], // '/../**/migrations/**' => (설정 시) Duplicate migrations 오류(두 번 돌아서 중복 오류)
  migrationsTableName: 'migrations',
});
