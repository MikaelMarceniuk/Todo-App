'use client'

import './style.css'

const CustomCheckbox: React.FC = () => {
  return (
    <input
      type="checkbox"
      className="appearance-none outline-none cursor-pointer w-5 h-5 border border-[#393A4B] rounded-full customCheckbox"
    />
  )
}

export default CustomCheckbox
