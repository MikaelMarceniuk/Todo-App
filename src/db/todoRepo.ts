'use server'

import { Prisma } from '@prisma/client'
import { prisma } from '.'
import { TodoFilter } from '@/@types/TodoFilter'

const getTodos = async (filter: TodoFilter) => {
  try {
    let apiResult

    if (filter == 'All') apiResult = await prisma.todo.findMany()
    if (filter == 'Active')
      apiResult = await prisma.todo.findMany({ where: { isCompleted: false } })
    if (filter == 'Completed')
      apiResult = await prisma.todo.findMany({ where: { isCompleted: true } })

    return { isSuccess: true, data: apiResult }
  } catch (e) {
    console.error('Error: ', e)
    return { isSuccess: false, message: 'Failed to created new todo' }
  }
}

const createTodo = async (newTodo: Prisma.todoCreateInput) => {
  try {
    await prisma.todo.create({ data: newTodo })
    return { isSuccess: true, message: 'Succefully created new todo' }
  } catch (e) {
    console.error('Error: ', e)
    return { isSuccess: false, message: 'Failed to created new todo' }
  }
}

const updateCompleteInTodo = async (todoId: string, isComplete: boolean) => {
  try {
    await prisma.todo.update({
      data: { isCompleted: isComplete },
      where: { id: todoId },
    })
    return { isSuccess: true, message: 'Succefully updated todo' }
  } catch (e) {
    console.error('Error: ', e)
    return { isSuccess: false, message: 'Failed to update todo' }
  }
}

const deleteTodo = async (todoId: string) => {
  try {
    await prisma.todo.delete({ where: { id: todoId } })
    return { isSuccess: true, message: 'Succefully deleted todo' }
  } catch (e) {
    console.error('Error: ', e)
    return { isSuccess: false, message: 'Failed to delete todo' }
  }
}

const deleteCompletedTodos = async () => {
  try {
    await prisma.todo.deleteMany({ where: { isCompleted: true } })
  } catch (e) {
    console.error('Error: ', e)
    return { isSuccess: false, message: 'Failed to delete completed todos' }
  }
}

export {
  getTodos,
  createTodo,
  updateCompleteInTodo,
  deleteTodo,
  deleteCompletedTodos,
}
