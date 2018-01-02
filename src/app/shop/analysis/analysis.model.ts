//市场交易统计-时间维度（天）营业额报表
export class Market_Time_Day {
  reportDate: string //时间
  totalMoneyAmount: number //总实际收入
  totalOrderAmount: number //订单总数
  totalOrigMoneyAmount: number //总原始金额
  totalQty: number //产品总数量
}

//市场交易统计-产品维度营业额报表
export class Market_Product {
  productId: number //产品ID
  productName: string //产品名
  totalMoneyAmount: number //总实收金额
  totalOrderAmount: number //总订单数
  totalOrigMoneyAmount: number //总原始金额
  totalQty: number //总产品数
}

//市场交易统计-商户维度营业额报表
export class Market_Shop {
  reportDate: string
  shopId: number
  shopName: string
  totalMoneyAmount: number
  totalOrderAmount: number
  totalOrigMoneyAmount: number
  totalQty: number
}

//市场交易统计-时间维度（小时）营业额报表
export class Market_Time_Hour {
  reportDate: string //时间
  totalMoneyAmount: number //总实际收入
  totalOrderAmount: number //订单总数
  totalOrigMoneyAmount: number //总原始金额
  totalQty: number //产品总数量
}






















