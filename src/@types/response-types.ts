export interface ResponseTypes<ResponseList> {
  message: string,
  data: ResponseList,
  meta: {
    thisPage: number,
    limit: number,
    allPages: number,
    count: number
  }
}