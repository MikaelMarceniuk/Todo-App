'use client'

import Image from 'next/image'
import Checkbox from 'react-custom-checkbox'

const CustomCheckbox: React.FC = () => {
  return (
    <Checkbox
      size={20}
      borderRadius={10}
      borderColor="#393A4B"
      icon={
        <div className="w-full h-full flex justify-center items-center bg-[#55DDFF] rounded-full relative">
          <div className="w-[10px] h-[10px] relative">
            <Image
              src="/icon-check.svg"
              alt="Check icon"
              fill
            />
          </div>
        </div>
      }
    />
  )
}

export default CustomCheckbox
