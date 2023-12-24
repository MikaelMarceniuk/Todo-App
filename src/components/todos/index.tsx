import TodoCreator from './todoCreator'
import TodoList from './todoList'
import TodoSorter from './todoSorter'

const Todo: React.FC = () => {
  return (
    <>
      <TodoCreator />
      <TodoList />
      <TodoSorter />
    </>
  )
}

export default Todo
