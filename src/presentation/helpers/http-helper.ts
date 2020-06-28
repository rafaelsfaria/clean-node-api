// eslint-disable-next-line no-unused-vars
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
