'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ILightDarkModeContext {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const LightDarkModeContext = createContext<ILightDarkModeContext>(
  {} as unknown as ILightDarkModeContext
)

export const useLightDarkModeContext = () => useContext(LightDarkModeContext)

interface IProps {
  children: React.ReactNode
}

const LightDarkModeProvider: React.FC<IProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => setIsDarkMode((oldValue) => !oldValue)

  useEffect(() => {
    document.getElementsByTagName('html')[0].className = isDarkMode
      ? 'dark'
      : 'white'
  }, [isDarkMode])

  return (
    <LightDarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </LightDarkModeContext.Provider>
  )
}

export default LightDarkModeProvider
