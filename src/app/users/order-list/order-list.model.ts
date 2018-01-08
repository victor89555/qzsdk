export class Order {
  id: number;
  shopName: string;
  status: number;
  tradingTime: string;
  orderLines: OrderLine[] = []
}

export class OrderLine {
  discount: number;
  origAmount: number;
  price: number;
  productName: string;
  qty: number;
  unitName: string;
  totalAmount: number;
}
