export class StockCompany {
  constructor(
    readonly symbol: string,
    readonly companyName: string,
    readonly exchange: string,
    readonly industry: string,
    readonly website: string,
    readonly description: string,
    readonly CEO: string,
    readonly issueType: string,
    readonly sector: string
  ) {
  }
}
