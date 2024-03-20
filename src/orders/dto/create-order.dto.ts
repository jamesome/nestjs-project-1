export class CreateOrderDto {
  order_no: string;
  member_id: number;
  item_id: number;
  status: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
