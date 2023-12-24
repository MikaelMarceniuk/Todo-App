import CustomCheckbox from '@/components/customCheckbox'
import Header from '@/components/header'

const HomePage = () => {
  return (
    <main className="min-h-screen px-7 py-12 bg-[#171823] bg-dark-mobile bg-contain bg-no-repeat">
      <div className="h-full">
        <Header />
        <div className="w-full h-12 px-5 bg-[#25273D] rounded-md flex items-center gap-3 ">
          <CustomCheckbox />
          <input
            className="bg-[#25273D] text-[#C8CBE7] text-xs focus:outline-none"
            placeholder="Create a new todo..."
          />
        </div>
      </div>
    </main>
  )
}

export default HomePage
