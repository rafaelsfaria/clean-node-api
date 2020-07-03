// eslint-disable-next-line no-unused-vars
import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
