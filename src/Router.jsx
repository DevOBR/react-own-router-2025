import { EVENTS } from './const.js'
import { useState, useEffect, Children } from 'react'
import { match } from 'path-to-regexp'
import { getLocationPathName } from './utility.js'

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = ({ cp }) => <h1> {cp} 404 Not found</h1>,
  children
}) {
  const [currentPath, setCurrentPath] = useState(getLocationPathName())
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const routesFromChildren = Children.map(children, ({ type, props }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const fullRoutes = routes.concat(routesFromChildren).filter(Boolean)

  let routeParams = {}
  const Page = fullRoutes.find(({ path }) => {
    if (path === currentPath) return true // -> we don't need more

    const matcherUrl = match(path) // -> path = { /foo/:search }
    const matched = matcherUrl(currentPath) // -> cuerrentPath = { /search/wordtosearch }
    if (!matched) return false

    routeParams = matched.params

    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent cp={currentPath} />
  )
}
