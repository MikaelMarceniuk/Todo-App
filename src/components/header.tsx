'use client'

import { useLightDarkModeContext } from '@/providers/lighDarkModeProvider'
import Image from 'next/image'

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useLightDarkModeContext()

  return (
    <header className="flex justify-between">
      <div className="w-28 h-5 relative">
        <Image
          src="./todo-brand.svg"
          alt="Sun icon"
          fill
        />
      </div>
      <div
        className="w-5 h-5 relative cursor-pointer"
        onClick={toggleDarkMode}
      >
        <Image
          src={isDarkMode ? './icon-sun.svg' : './icon-moon.svg'}
          alt="Sun and Moon icon"
          fill
        />
      </div>
    </header>
  )
}

export default Header
