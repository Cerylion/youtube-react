export default function Video(props) {
  return (
    <article className="video-card">
      <img src={props.image} alt="video image" />
      <footer>
        <img src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${props.channel}`} alt="person image" />
        <span className="video-card-title">{props.title}</span>
        <span className="video-card-channel">{props.channel}</span>
      </footer>
    </article>
  )
}