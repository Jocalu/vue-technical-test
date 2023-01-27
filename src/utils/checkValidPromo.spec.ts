import {
  checkValidPromo,
  convertsToNumber,
  parseValue
} from '@/utils/checkValidPromo'

describe('convertsToNumber', () => {
  test('should returns correct number when passed a number', () => {
    const value = 42

    expect(convertsToNumber(value)).toBe(value)
  })

  test('should returns correct number when passed a string of a number', () => {
    const value = '42'

    expect(convertsToNumber(value)).toBe(42)
  })

  test('should throws error when passed a string that is not a number', () => {
    const value = 'hello'

    expect(() => convertsToNumber(value)).toThrow()
  })

  test('should throws error when passed an object', () => {
    const value = { test: 'testValue' }

    expect(() => convertsToNumber(value)).toThrow()
  })

  test('should throws error when passed an array', () => {
    const value = [1, 2, 3]

    expect(() => convertsToNumber(value)).toThrow()
  })
})

describe('parseValue', () => {
  it('should return a number when the input is a valid number string', () => {
    expect(parseValue('123')).toEqual(123)
    expect(parseValue('-123')).toEqual(-123)
  })

  it('should throw an error when the input is not a valid number string', () => {
    expect(() => parseValue('abc')).toThrow()
  })
})

describe('checkValidPromo', () => {
  it('should return the parsed number when the input is a valid promo value', () => {
    expect(checkValidPromo('10')).toEqual(10)
    expect(checkValidPromo(50)).toEqual(50)
  })

  it('should throw an error when the input is not a valid promo value', () => {
    expect(() => checkValidPromo('-10')).toThrow()
    expect(() => checkValidPromo('105')).toThrow()
    expect(() => checkValidPromo('abc')).toThrow()
  })
})
