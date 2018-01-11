export class OrderDetail {
  id: number
  orderLines: OrderLine[]
  shopName: string
  status: number
  tradingTime: string
}

export class OrderLine {
  discount: number
  origAmount: number
  price: number
  productName: string
  qty: number
  unitName: string
  totalAmount: number
}
