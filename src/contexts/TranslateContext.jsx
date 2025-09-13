import { createContext, useState } from 'react'
import { i18n } from '../i18n.json'

export const TranslateContext = createContext()

export function TranslateContextProvider({ children }) {
  const [translate, setTranslate] = useState(i18n.en)
  const [currentLang, setCurrentLang] = useState('en')

  function updateTranslate({ lang }) {
    setTranslate(i18n[lang] ?? i18n.en)
    setCurrentLang(lang)
  }

  return (
    <TranslateContext
      value={{
        translate,
        updateTranslate,
        currentLang
      }}
    >
      {children}
    </TranslateContext>
  )
}
