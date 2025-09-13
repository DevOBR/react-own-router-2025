import { useContext, useEffect } from 'react'
import { TranslateContext } from '../contexts/TranslateContext'

export function useTranslate({ routeParams }) {
  const { translate, updateTranslate, currentLang } =
    useContext(TranslateContext)

  useEffect(() => {
    updateTranslate({ lang: routeParams?.lang ?? 'en' })
  }, [])
  return { translate, currentLang }
}
