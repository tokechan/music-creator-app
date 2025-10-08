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
    <div>
      <h1 className='text-3xl  font-bold text-gray-500 mb-4 underline'>Generate Music App</h1>
      <h2 className='text-xl font-bold text-gray-500 mb-4'>Music List</h2>
        <ul>
          {musicList.map((music) => (
            <li key={music.id} className='border p-4 rounded-md mb-4'>
              <h3>{music.title}</h3>
              <p>Artist:{music.artist}</p>
              <button className='bg-blue-500 text-white p-1 rounded-md' onClick={() => playMusic(music.audioUrl)}>Play</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App