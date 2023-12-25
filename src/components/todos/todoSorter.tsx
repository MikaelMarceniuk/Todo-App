'use client'

import { TodoFilter } from '@/@types/TodoFilter'
import { useTodoContext } from '.'

const TodoSorter: React.FC = () => {
  const { currentFilter, fetchTodos } = useTodoContext()

  const handleOnClick = (newFilter: TodoFilter) => async () => {
    if (currentFilter == newFilter) return

    await fetchTodos(newFilter)
  }

  const getClassname = (key: TodoFilter) => {
    let cssClass = 'hover:text-white cursor-pointer'

    if (currentFilter == key) cssClass += ` text-[#3A7CFD]`

    return cssClass
  }

  return (
    <ul className="h-full flex justify-center items-center gap-5 text-sm font-bold text-[#5B5E7E]">
      <li
        className={getClassname('All')}
        onClick={handleOnClick('All')}
      >
        All
      </li>
      <li
        className={getClassname('Active')}
        onClick={handleOnClick('Active')}
      >
        Active
      </li>
      <li
        className={getClassname('Completed')}
        onClick={handleOnClick('Completed')}
      >
        Completed
      </li>
    </ul>
  )
}

export default TodoSorter
