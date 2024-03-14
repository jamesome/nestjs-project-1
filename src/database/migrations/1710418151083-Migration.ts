import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migration1710418151083 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'member',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const member = await queryRunner.getTable('member');
    await queryRunner.dropTable(member);
  }
}
