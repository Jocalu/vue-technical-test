import { useStorage } from '@/composables/useStorage'

const { getStorageItem, setStorageItem } = useStorage()

const testKey = 'testKey'
const testValue = 'testValue'

describe('getStorageItem', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should returns the correct value when the key exists in local storage', () => {
    const key = testKey
    const value = { test: testValue }

    localStorage.setItem(key, JSON.stringify(value))

    expect(getStorageItem(key)).toEqual(value)
  })

  test('should returns null when the key does not exist in local storage', () => {
    const key = testKey

    expect(getStorageItem(key)).toEqual(null)
  })

  test('should returns null when the key value is "undefined" in local storage', () => {
    const key = testKey

    localStorage.setItem(key, 'undefined')

    expect(getStorageItem(key)).toEqual(null)
  })
})

describe('setStorageItem', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should sets the correct value when passed a key and value', () => {
    const key = testKey
    const value = { test: testValue }

    setStorageItem(key, value)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })

  test('should does not throw an error when passed a valid key and value', () => {
    const key = testKey
    const value = { test: testValue }

    expect(() => setStorageItem(key, value)).not.toThrow()
  })
})
