import DragAndDropHint from '@/components/dragAndDropHint'
import Header from '@/components/header'
import Todo from '@/components/todos'

// bg-[#171823] bg-dark-mobile md:bg-dark-desktop

const HomePage = () => {
  return (
    <main className="min-h-screen px-7 py-12 bg-contain bg-no-repeat bg-white-mobile dark:bg-dark-mobile md:bg-white-desktop md:dark:bg-dark-desktop bg-[#FAFAFA] dark:bg-[#171823]">
      <div className="h-full max-w-[540px] m-auto">
        <Header />
        <Todo />
        <DragAndDropHint />
      </div>
    </main>
  )
}

export default HomePage
