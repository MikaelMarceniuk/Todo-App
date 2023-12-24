'use client'

import { Prisma } from '@prisma/client'
import CustomCheckbox from '../customCheckbox'
import { useState } from 'react'
import { createTodo } from '@/db/todoRepo'
import { useTodoContext } from '.'

const defaultTaskValues: Prisma.todoCreateInput = {
  title: '',
  isCompleted: false,
}

const TodoCreator: React.FC = () => {
  const [taskValues, setTaskValues] = useState(defaultTaskValues)
	const { fetchTodos } = useTodoContext()

  const handleOnKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key != 'Enter') return

    event.preventDefault()
    const { isSuccess } = await createTodo(taskValues)
    if (isSuccess) {
			setTaskValues(defaultTaskValues)
			await fetchTodos()
		}
  }

  return (
    <div className="w-full h-12 px-5 mt-10 bg-[#25273D] rounded-md flex items-center gap-3 ">
      <CustomCheckbox
        checked={taskValues.isCompleted}
        onChange={(e) =>
          setTaskValues((oldValues) => ({
            ...oldValues,
            isCompleted: e.target.checked,
          }))
        }
      />
      <input
        className="bg-[#25273D] text-[#C8CBE7] text-xs focus:outline-none"
        placeholder="Create a new todo..."
        value={taskValues.title}
        onChange={(e) =>
          setTaskValues((oldValues) => ({
            ...oldValues,
            title: e.target.value,
          }))
        }
        onKeyDown={handleOnKeyDown}
      />
    </div>
  )
}

export default TodoCreator
