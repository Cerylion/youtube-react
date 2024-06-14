export default function Categories() {
  const categories = ['All', 'Music', 'Gamming', 'Code', 'Programming', 'Life Style', 'Sports' ]
  return (
    <div id="categories-list" className="flex flex-row gap-[1rem]">
      {/*
      <span className="category">Cat 1</span>
      */}
      {
        categories.map((category) => {
          return (
            <span key={`category-${category}`} id="category" className="p-[0.5rem_1rem] rounded-[20px] bg-[#282828]">{category}</span>
          )
        })
      }
    </div>
  )
}