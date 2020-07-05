import { EmailValidatorAdapter } from './email-validator-adapter'

describe('EmailValidatorAdapter Util', () => {
  test('must return false if email is invalid', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
