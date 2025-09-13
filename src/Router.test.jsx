import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Router from './Router.jsx'
import Route from './Route.jsx'
import Link from './Link.jsx'
import { getLocationPathName, navigate } from './utility.js'
import { EVENTS } from './const.js'

vi.mock('./utility.js', () => ({
  getLocationPathName: vi.fn(),
  navigate: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('Router should work', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('Router should work with defaultComponent', () => {
    render(
      <Router routes={[]} defaultComponent={() => <h1>404 Not found</h1>} />
    )

    expect(screen.getByText('404 Not found')).toBeTruthy()
  })

  it('Router should work with path that matches', () => {
    getLocationPathName.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('Router should navigate using links', () => {
    getLocationPathName.mockReturnValueOnce('/')

    navigate.mockImplementationOnce((href) => {
      window.history.pushState({}, '', href)
      window.dispatchEvent(new Event(EVENTS.PUSHSTATE))
    })

    const Home = () => {
      return (
        <>
          <h1>Home</h1>
          <Link to='/about'>Got to About</Link>
        </>
      )
    }
    render(
      <Router>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )
    const button = screen.getByText('Got to About')
    fireEvent.click(button)
    const aboutTitle = screen.getByText('About')
    expect(aboutTitle).toBeTruthy()
  })
})
