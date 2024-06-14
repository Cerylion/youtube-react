import clsx from 'clsx';

export default function Video( { title, channel, image }) {
/*
  if (!channel) {
    return (
      <article>
        <p>Incomplete</p>
      </article>
    )
  }
*/

  //const articleClassnames = "video-card" + (channel === "A Different Channel" ? " special" : "");

  let articleClassnames = ["video-card"];
  if  (channel === "A Different Channel") {
    articleClassnames.push("special");
  }

  return (
    /*<article className={articleClassnames.join(" ")}>*/
    <article id='video-card' className={clsx('flex flex-col gap-[0.5rem]', {special: channel === "A Different Channel"})}>
      {// se pueden agregar varias clases al mismo tiempo para que se agreguen sencillamente como una cadena de texto, separadas por un espacio de la siguiente manera:
      // {"special red double-special": channel === "A Different Channel"}
      }
      <img className='w-full rounded-[10px] object-cover' src={image} alt="video image" />
      <footer className='grid gap-[0.5rem] grid-cols-[2rem_1fr]'>
        {/*channel && (
          <img
            src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${channel}`}
            alt="person image"
          />
        )}
        {!channel && <span> 🤷‍♂️ </span>
        */}
        {channel ? (
          <img
          className='col-start-1 col-end-2 w-[2rem] h-[2rem] rounded-full '
          src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${channel}`}
          alt="person image"
        />
        ) : (
          <span> 🤷‍♂️ </span>
        )}

        <span id="video-card-title" className='col-start-2 col-end-3'>{title}</span>
        <span id="video-card-channel" className='col-start-2 col-end-3'>{channel}</span>
      </footer>
    </article>
  )
}