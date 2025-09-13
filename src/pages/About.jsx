import Link from '../Link.jsx'
import { useTranslate } from '../hooks/useTranslate.js'

export default function About({ routeParams }) {
  const { translate, currentLang } = useTranslate({ routeParams })
  const href = `/${currentLang}/`
  return (
    <>
      <h1>{translate.about.title}</h1>
      <h2>{translate.about.subtitle}</h2>
      <img
        src='https://plus.unsplash.com/premium_photo-1668902221464-402993a500ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm8lMjBjb3B5cmlnaHR8ZW58MHx8MHx8fDA%3D'
        alt={translate.about.imgAlt}
      />
      <p>{translate.about.description}</p>
      {/* <a href='/'>Go to Home</a> */}
      {/* <button onClick={() => navigate('/')}> Go to Home </button> */}
      <Link to={href}>{translate.about.link}</Link>
    </>
  )
}
