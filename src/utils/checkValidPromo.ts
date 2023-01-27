const convertsToNumber = (value: unknown): number => {
  if (typeof value === 'number') {
    return value
  }

  if (typeof value === 'string') {
    return parseValue(value)
  }

  throw new Error('The value is not a number')
}

const parseValue = (value: string): number => {
  const parsedValue = parseInt(value)

  if (!Number.isNaN(parsedValue)) {
    return parsedValue
  }

  throw new Error('The value is not a number')
}

const checkValidPromo = (value: unknown): number => {
  const parsedValue = convertsToNumber(value)

  if (parsedValue > 0 && parsedValue <= 100) {
    return parsedValue
  }

  throw new Error('Invalid promo value')
}

export { checkValidPromo, convertsToNumber, parseValue }
