// eslint-disable-next-line no-unused-vars
import { AddAccountModel } from '../../domain/usecases/add-account'
// eslint-disable-next-line no-unused-vars
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (account: AddAccountModel): Promise<AccountModel>
}
