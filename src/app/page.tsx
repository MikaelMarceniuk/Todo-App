'use client'

import CustomCheckbox from '@/components/customCheckbox'
import Header from '@/components/header'
import TodoItem from '@/components/todo-item'
import todoItems from '@/mocks/todoItems'

const HomePage = () => {
  return (
    <main className="min-h-screen px-7 py-12 bg-[#171823] bg-dark-mobile bg-contain bg-no-repeat">
      <div className="h-full">
        <Header />

        <div className="w-full h-12 px-5 mt-10 bg-[#25273D] rounded-md flex items-center gap-3 ">
          <CustomCheckbox />
          <input
            className="bg-[#25273D] text-[#C8CBE7] text-xs focus:outline-none"
            placeholder="Create a new todo..."
          />
        </div>

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
            <button
              onClick={() => console.log('Removing completed todo items')}
            >
              Clear Completed
            </button>
          </div>
        </div>

        <ul className="h-12 mt-4 bg-[#25273D] rounded-md flex justify-center items-center gap-5 text-sm font-bold text-[#5B5E7E]">
          <li className="text-[#3A7CFD]">All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>

        <p className="mt-10 text-center text-[#5B5E7E] text-sm">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  )
}

export default HomePage
