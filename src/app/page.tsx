import DragAndDropHint from '@/components/dragAndDropHint'
import Header from '@/components/header'
import Todo from '@/components/todos'

const HomePage = () => {
  return (
    <main className="min-h-screen px-7 py-12 bg-[#171823] bg-dark-mobile bg-contain bg-no-repeat">
      <div className="h-full">
        <Header />
        <Todo />
        <DragAndDropHint />
      </div>
    </main>
  )
}

export default HomePage
