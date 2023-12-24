'use client'

import { deleteCompletedTodos } from '@/db/todoRepo'
import { useTodoContext } from '.'
import TodoItem from './todoItem'

const TodoList: React.FC = () => {
  const { todos, fetchTodos } = useTodoContext()

	const handleClearCompleted = async () => {
		await deleteCompletedTodos()
		await fetchTodos()
	}

  return (
    <div className="h-[368px] mt-4 bg-[#25273D] flex flex-col rounded-md">
      <div className="flex-[6] overflow-auto">
        {todos.map((p) => (
          <TodoItem
            key={p.id}
            {...p}
          />
        ))}
      </div>

      <div className="h-[50px] px-3 py-4 flex justify-between items-center text-xs text-[#5B5E7E] border-t-2 border-[#393A4B]">
        <span>
          {todos.reduce((acc, item) => (item.isCompleted ? acc : acc + 1), 0)}{' '}
          itens left
        </span>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoList
