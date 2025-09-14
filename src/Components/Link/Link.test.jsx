import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Link from './Link.jsx'
describe('Link', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Link should work', () => {
    render(<Link>Honme</Link>)
    expect(true).toBeTruthy()
  })

  it('Link should have href to /about', () => {
    render(<Link to='/about'>About</Link>)
    const el = screen.getByText('About')
    const href = el.getAttribute('href')
    expect(href).toBe('/about')
  })
})
