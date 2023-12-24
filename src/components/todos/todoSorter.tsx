const TodoSorter: React.FC = () => {
  return (
    <ul className="h-12 mt-4 bg-[#25273D] rounded-md flex justify-center items-center gap-5 text-sm font-bold text-[#5B5E7E]">
      <li className="text-[#3A7CFD]">All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
  )
}

export default TodoSorter
