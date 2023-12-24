'use client'

import './style.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomCheckbox: React.FC<IProps> = (props) => {
  return (
    <input
      type="checkbox"
      className="appearance-none outline-none cursor-pointer w-5 h-5 border border-[#393A4B] rounded-full customCheckbox"
      {...props}
    />
  )
}

export default CustomCheckbox
