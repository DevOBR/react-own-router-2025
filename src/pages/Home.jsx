import Link from '../Components/Link/Link.jsx'
import { useTranslate } from '../hooks/useTranslate.js'

export default function Home({ routeParams }) {
  const { translate, currentLang } = useTranslate({ routeParams })
  const href = `/${currentLang}/about`
  return (
    <>
      <h1>{translate.home.title}</h1>
      <p>{translate.home.description}</p>
      {/* <a href='/about'>Got to About</a> */}
      {/* <button onClick={() => navigate('/about')}> Go to About </button> */}
      <Link to={href}>{translate.home.link}</Link>
    </>
  )
}
