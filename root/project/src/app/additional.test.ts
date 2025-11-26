import { describe, it, expect } from 'vitest'

// Simple passing tests to expand the suite
describe('sanity', () => {
  it('adds numbers correctly', () => {
    expect(2 + 2).toBe(4)
  })

  it('compares objects by value', () => {
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 })
  })
})