export class OrderDetail {
  id: number
  shopName: string
  tradingTime: string
  payWay: number
  status: number
  origAmount: number
  totalAmount: number
  orderLines: OrderLine[]
}

export class OrderLine {
  price: number
  discount: number
  origAmount: number
  productName: string
  qty: number
  unitName: string
  totalAmount: number
}

export class Integral {
  subject: number
  amount: number
}
