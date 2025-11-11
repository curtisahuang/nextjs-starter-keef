describe('fake math tests', () => {
  const add = (a: number, b: number) => a + b
  const multiply = (a: number, b: number) => a * b

  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  test('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20)
  })

  test('truthiness examples', () => {
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
  })
})