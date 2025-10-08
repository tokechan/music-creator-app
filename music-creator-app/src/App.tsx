import './App.css'
import { Button } from './components/ui/button'

function App() {
  

  const musicList = [
    {
      id: 1,
      title: 'synthwace Dreams',
      artist: 'AI Composer',
      audioUrl:
        "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      coverUrl:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 2,
      title: 'Jazz Fusion',
      artist: 'Neural Network',
      audioUrl:
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
      coverUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      title: 'Ambiebt Soaces',
      artist: 'Deep Learning',
      audioUrl:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
      coverUrl:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop&crop=center",
    },
  ];


  //music play function
  const playMusic = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };


  return (  
    <div className='p-6'>
      <h1 className='text-3xl  font-bold text-gray-500 mb-4 underline'>Music List Page</h1>
      
      <section>
      <h2 className='text-xl font-bold text-gray-500 mb-4'>Generate Music</h2>
      <p>before implement</p>
      </section>

      <section>
        <h2 className='text-xl font-bold mb-4'>Reccomended Music</h2>
        <div className='flex gap-4'>
          {musicList.map((music) => (
            <div key={music.id} className='border p-4 rounded mb-4'>
              <img 
                src={music.coverUrl}
                alt={music.title}
                width='150'
                height='150'
                className='rounded mb-2'
              />
              <h3 className='font-bold'>{music.title}</h3>
              <p className='text-gray-500 text-sm'>{music.artist}</p>
              <button 
                onClick={() => playMusic(music.audioUrl)}
                className='mt-2 bg-blue-500 text-white px-3 py-1 rounded'
              >
                Play
              </button>
            </div>
          ))}
        </div>
      </section> 
    </div>
  )
}

export default App