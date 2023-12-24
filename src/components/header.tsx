import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <div className="w-28 h-5 relative">
        <Image
          src="./todo-brand.svg"
          alt="Sun icon"
          fill
        />
      </div>
      <div className="w-5 h-5 relative">
        <Image
          src="./icon-sun.svg"
          alt="Sun icon"
          fill
        />
      </div>
    </header>
  )
}

export default Header
