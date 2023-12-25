import DragAndDropHint from '@/components/dragAndDropHint'
import Header from '@/components/header'
import Todo from '@/components/todos'

const HomePage = () => {
  return (
    <main className="min-h-screen px-7 py-12 bg-[#171823] bg-contain bg-no-repeat bg-dark-mobile md:bg-dark-desktop">
      <div className="h-full max-w-[540px] m-auto">
        <Header />
        <Todo />
        <DragAndDropHint />
      </div>
    </main>
  )
}

export default HomePage
