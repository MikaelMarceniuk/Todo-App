'use client'

import Image from 'next/image'
import CustomCheckbox from './customCheckbox'
import { ITodoItem } from '@/@types/ITodoItem'
import { useState } from 'react'

const TodoItem: React.FC<ITodoItem> = ({ id, value, isCompleted }) => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted)

  return (
    <div className="px-3 py-4 flex items-center gap-2 border-b-2 border-[#393A4B]">
      <CustomCheckbox
        checked={isTaskCompleted}
        onChange={() => setIsTaskCompleted(!isTaskCompleted)}
      />
      <span
        className={`text-xs flex-[6] ${
          isTaskCompleted ? 'text-[#4D5067] line-through' : 'text-[#C8CBE7]'
        }`}
      >
        {value}
      </span>
      <Image
        src={'/icon-cross.svg'}
        alt="Cross"
        width={12}
        height={12}
        onClick={() => console.log(`Removing todo item of id: ${id}`)}
      />
    </div>
  )
}

export default TodoItem
