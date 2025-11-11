describe('string manipulation', () => {
  test('uppercase', () => {
    expect('nextjs'.toUpperCase()).toBe('NEXTJS')
  })

  test('includes', () => {
    expect('testing with jest').toContain('jest')
  })

  test.todo('replace will be implemented later')
})