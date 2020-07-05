import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidatorAdapter Util', () => {
  test('must return false if email is invalid', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('must return true if email is valid', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(true)
  })
})
