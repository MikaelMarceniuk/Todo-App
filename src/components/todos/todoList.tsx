'use client'

import todoItems from '@/mocks/todoItems'
import TodoItem from './todoItem'

const TodoList: React.FC = () => {
  return (
    <div className="h-[368px] mt-4 bg-[#25273D] flex flex-col rounded-md">
      <div className="flex-[6] overflow-auto">
        {todoItems.map((p) => (
          <TodoItem
            key={p.id}
            {...p}
          />
        ))}
      </div>

      <div className="h-[50px] px-3 py-4 flex justify-between items-center text-xs text-[#5B5E7E] border-t-2 border-[#393A4B]">
        <span>
          {todoItems.reduce(
            (acc, item) => (item.isCompleted ? acc : acc + 1),
            0
          )}{' '}
          itens left
        </span>
        <button onClick={() => console.log('Removing completed todo items')}>
          Clear Completed
        </button>
      </div>
    </div>
  )
}

export default TodoList