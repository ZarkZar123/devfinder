import { IoMoonOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="bg-[blue] w-full flex justify-between">
      <h1>devfinder</h1>
      <div>
        <span>Dark</span>
        <span>
        <IoMoonOutline />
        </span>
      </div>
    </header>
  )
}

export default Header
