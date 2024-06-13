import Categories from './Categories'
import Video from './Video'

export default function Content() {

  const videos = [
    { image: 'https://picsum.photos/300/200',
      title: 'This is a video title',
      channel: 'A Channel Name'
    },
    { image: 'https://picsum.photos/300/200',
      title: 'This is another video title',
      channel: 'A 2nd Channel Name'
    },
    { image: 'https://picsum.photos/300/200',
      title: 'This is a third video title',
      channel: 'A Different Channel'
    },
    { image: 'https://picsum.photos/300/200',
      title: 'This is, yet again, a video title',
      channel: 'A Channel Name'
    }
  ]

  return (
  <section id="content">
    <Categories />
    <section id='videos'>
    {
      videos.map((video) => {
        return <Video
          key={`video-${video.title}`}
          image={video.image}
          title={video.title}
          channel={video.channel}
        />
      }
    )}
    </section>
  </section>
  )
}