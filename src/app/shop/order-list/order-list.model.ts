export class Order {
  marketId: string;
  marketName: string;
  menberId: string;
  shopId: string;
  shopName: string;
  tradingTime: string;
  payWay: string;
  origAmount: number;
  totalAmount: number;
  orderLines: OrderLine[] = []
}

export class OrderLine {
  productId: string;
  productName: string;
  unitName: string;
  imgUrl: string;
  price: number;
  qty: number;
  discount: string;
  origAmount: number;
  totalAmount: number;
}
