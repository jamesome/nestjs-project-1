export class CreateOrderDto {
  orderNo: string;
  memberId: number;
  itemId: number;
  status: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
