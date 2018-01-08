export class Shop {
  id: string
  marketName: string
  name: string
  status: string
  beginTime: string
  endTime: string
}

export class Market {
  name: string
  shops: Shop[]
}
