export default function Menu() {
// list rendering with this baby here

  const menuItems = [
    {icon: '🏠', text: 'Home'},
    {icon: '🩳', text: 'Shorts'},
    {icon: '⏰', text: 'Subscriptions'}
  ] 

return <aside id="menu" className="pr-[1rem] col-start-1 col-end-2 row-start-2 row-end-3">
  {/* Para ejecutar JavaScript, ponemos el código dentro de llaves {} */}
  {/*
    <div className="menu-item">
    <span>🏠</span>
    <span>Home</span>
    </div>
  */}
  {
    menuItems.map((item, idx) => {
      return (
        <div key={`menu-item-${idx}`} id="menu-item" className="p-[1rem] rounded-[20px] flex flex-row gap-2 items-center hover:bg-[#282828]" >
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      )
    })
  }
  </aside>
}