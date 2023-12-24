'use client'

import { TodoFilter } from '@/@types/TodoFilter'
import { useTodoContext } from '.'

const TodoSorter: React.FC = () => {
  const { currentFilter, fetchTodos } = useTodoContext()

  const handleOnClick = (newFilter: TodoFilter) => async () => {
    if (currentFilter == newFilter) return

    await fetchTodos(newFilter)
  }

  return (
    <ul className="h-12 mt-4 bg-[#25273D] rounded-md flex justify-center items-center gap-5 text-sm font-bold text-[#5B5E7E]">
      <li
        className={currentFilter == 'All' ? `text-[#3A7CFD]` : ''}
        onClick={handleOnClick('All')}
      >
        All
      </li>
      <li
        className={currentFilter == 'Active' ? `text-[#3A7CFD]` : ''}
        onClick={handleOnClick('Active')}
      >
        Active
      </li>
      <li
        className={currentFilter == 'Completed' ? `text-[#3A7CFD]` : ''}
        onClick={handleOnClick('Completed')}
      >
        Completed
      </li>
    </ul>
  )
}

export default TodoSorter
