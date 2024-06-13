export default function Menu() {
// list rendering with this baby here

  const menuItems = [
    {icon: '🏠', text: 'Home'},
    {icon: '🩳', text: 'Shorts'},
    {icon: '⏰', text: 'Subscriptions'}
  ] 

return <aside id="menu">
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
        <div key={`menu-item-${idx}`} className="menu-item">
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      )
    })
  }
  </aside>
}