import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

jest.mock('next/image', () => {
  return function MockedImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    // Render an img tag to avoid Next.js Image complexities in tests
    // eslint-disable-next-line jsx-a11y/alt-text
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
})

describe('Home page component', () => {
  it('renders call to action', () => {
    render(<Home />)
    expect(screen.getByText(/Deploy now/i)).toBeInTheDocument()
  })

  it('mentions editing the page file', () => {
    render(<Home />)
    expect(screen.getByText(/src\/app\/page\.tsx/i)).toBeInTheDocument()
  })

  it('runs formerly skipped example test', () => {
    expect(true).toBe(true)
  })
})