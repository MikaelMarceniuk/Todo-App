'use client'

import Image from 'next/image'
import CustomCheckbox from '../customCheckbox'
import { todo } from '@prisma/client'
import { useState } from 'react'
import { deleteTodo, updateCompleteInTodo } from '@/db/todoRepo'
import { useTodoContext } from '.'

const TodoItem: React.FC<todo> = ({ id, title, isCompleted }) => {
  const [isTaskComplete, setIsTaskComplete] = useState(isCompleted)
  const { fetchTodos } = useTodoContext()

  const handleOnCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.target.checked

    const { isSuccess } = await updateCompleteInTodo(id, isCompleted)
    if (isSuccess) {
      setIsTaskComplete(isCompleted)
      await fetchTodos()
    }
  }

  const handleOnDelete = async () => {
    const { isSuccess } = await deleteTodo(id)
    if (isSuccess) await fetchTodos()
  }

  return (
    <div className="px-3 py-4 flex items-center gap-2 border-b-2 border-[#E3E4F1] dark:border-[#393A4B]">
      <CustomCheckbox
        checked={isTaskComplete}
        onChange={handleOnCheck}
      />
      <span
        className={`text-xs flex-[6] ${
          isCompleted
            ? 'text-[#4D5067] line-through'
            : 'dark:text-[#C8CBE7] text-[#4D5067]'
        }`}
      >
        {title}
      </span>
      <Image
        className="cursor-pointer"
        src={'/icon-cross.svg'}
        alt="Cross"
        width={12}
        height={12}
        onClick={handleOnDelete}
      />
    </div>
  )
}

export default TodoItem
