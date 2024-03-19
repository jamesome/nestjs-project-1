import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class MiniSellmate1710843080498 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'member_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'item_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'datetime',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'members',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar(1000)',
            isNullable: false,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar(100)',
            isNullable: false,
          },
          {
            name: 'active',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );

    queryRunner.createTable(
      new Table({
        name: 'options',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'product_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'active',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        columnNames: ['member_id'], // 외래 키가 추가될 열
        referencedColumnNames: ['id'], // 외래 키가 참조할 열
        referencedTableName: 'members', // 외래 키가 참조할 테이블
        onDelete: 'CASCADE', // 연결된 행이 삭제될 때의 동작
      }),
    );

    await queryRunner.createForeignKey(
      'options',
      new TableForeignKey({
        columnNames: ['product_id'], // 외래 키가 추가될 열
        referencedColumnNames: ['id'], // 외래 키가 참조할 열
        referencedTableName: 'products', // 외래 키가 참조할 테이블
        onDelete: 'CASCADE', // 연결된 행이 삭제될 때의 동작
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('orders', 'FK_orders_member_id');
    // await queryRunner.dropForeignKey('options', 'FK_products_product_id');
    await queryRunner.dropTable('orders');
    await queryRunner.dropTable('members');
    await queryRunner.dropTable('options');
    await queryRunner.dropTable('products');
  }
}
