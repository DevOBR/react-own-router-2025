import { lazy, Suspense } from 'react'
import './App.css'
import NotFound from './pages/NotFound.jsx'
import Search from './pages/Search.jsx'
import Router from './Components/Router/Router.jsx'
import Route from './Components/Route/Route.jsx'

// here we are using daynamic import
const LazyHome = lazy(() => import('./pages/Home.jsx'))
const LazyAbout = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '{/:lang}/search/:word',
    Component: Search
  }
]

function App() {
  return (
    <Suspense fallback={null}>
      <main>
        <Router routes={appRoutes} defaultComponent={NotFound}>
          <Route path='/{:lang}' Component={LazyHome} />
          <Route path='{/:lang}/about' Component={LazyAbout} />
        </Router>
      </main>
    </Suspense>
  )
}

export default App
