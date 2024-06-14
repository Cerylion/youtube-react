import YouTubeLogo from "./YouTubeLogo"
export default function NavBar() {
  return <nav className="col-start-1 col-end-3 grid grid-cols-3">
    <div className="flex flex-row items-center gap-1 pl-4">
      <YouTubeLogo height="1.8rem" width="3rem"/>
      <span>YouTube</span>
    </div>
    <div id="search-container" className="flex justify-center items-center">
      <input className="w-full p-[0.5rem_1rem] border border-[#282828] rounded-full bg-transparent" type="text" placeholder="Search" />
    </div>
    <div id="user-icon" className="flex justify-end">
    <img className="w-8 h-8 rounded-full"
  src="https://api.dicebear.com/8.x/identicon/svg"
  alt="avatar"
/>
    </div>
  </nav>
}