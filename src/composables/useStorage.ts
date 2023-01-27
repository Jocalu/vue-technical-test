export const useStorage = () => {
  const getStorageItem = <T>(key: string): T | null => {
    const value = localStorage.getItem(key)

    if (value && value !== 'undefined') {
      return JSON.parse(value)
    }

    return null
  }

  const setStorageItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return { getStorageItem, setStorageItem }
}
