import { BUTTONS, TARGETS } from '../../const.js'
import { navigate } from '../../utility.js'

export default function Link({ to, target, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // Primary button
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === TARGETS._self

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
