'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import TodoCreator from './todoCreator'
import TodoList from './todoList'
import TodoSorter from './todoSorter'
import { todo } from '@prisma/client'
import { getTodos } from '@/db/todoRepo'
import { TodoFilter } from '@/@types/TodoFilter'

interface ITodoProvider {
  todos: todo[]
  currentFilter: TodoFilter
  isFetching: boolean
  fetchTodos: (newFilter?: TodoFilter) => Promise<void>
}

const TodoProvider = createContext<ITodoProvider>({
  todos: [],
  todoFilter: 'All',
  isFetching: false,
} as unknown as ITodoProvider)

export const useTodoContext = () => useContext(TodoProvider)

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<todo[]>([])
  const [todoFilter, setTodoFilter] = useState<TodoFilter>('All')
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    ;(async () => await fetchTodos(todoFilter))()
  }, [])

  const fetchTodos = async (newFilter?: TodoFilter) => {
    setIsFetching(true)

    const { isSuccess, data } = await getTodos(newFilter || todoFilter)
    if (isSuccess) setTodos(data as todo[])

    setIsFetching(false)

    if (newFilter) setTodoFilter(newFilter)
  }

  return (
    <TodoProvider.Provider
      value={{
        todos,
        currentFilter: todoFilter,
        isFetching,
        fetchTodos,
      }}
    >
      <TodoCreator />
      <TodoList />
      <TodoSorter />
    </TodoProvider.Provider>
  )
}

export default Todo
