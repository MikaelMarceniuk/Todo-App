import CustomCheckbox from '../customCheckbox'

const TodoCreator: React.FC = () => {
  return (
    <div className="w-full h-12 px-5 mt-10 bg-[#25273D] rounded-md flex items-center gap-3 ">
      <CustomCheckbox />
      <input
        className="bg-[#25273D] text-[#C8CBE7] text-xs focus:outline-none"
        placeholder="Create a new todo..."
      />
    </div>
  )
}

export default TodoCreator
