import './App.css'
import { Button } from './components/ui/button'

function App() {
  
  return (  
    <div>
      <h1 className='text-3xl  font-bold text-gray-500 mb-4 underline'>Generate Music App</h1>
      <Button variant="outline" className='bg-blue-500 text-white'>Generate</Button>
    </div>
  )
}

export default App