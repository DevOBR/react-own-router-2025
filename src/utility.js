import { EVENTS } from './const.js'

export function navigate(href) {
  window.history.pushState({}, '', href)
  const newEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(newEvent)
}

export const getLocationPathName = () => window.location.pathname
