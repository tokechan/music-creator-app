import axios from 'axios';
import { useState } from 'react';



function CreatePage() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [prompt, setPrompt] = useState('');
    const [generateMusic, setGenerateMusic] = useState('');

    const handleGenerate = async () => {
        const apiKey = import.meta.env.VITE_LOUDLY_API_KEY;

        try {
            const formData = new FormData();
            const musicPrompt = `Create a ${genre} song titled "${title}". Musical style: ${prompt}. High quality production with clear melody and rhythm.`;
            formData.append('duration', '45');
            formData.append('prompt', musicPrompt);
            
            const response = await axios.post(
                'https://soundtracks.loudly.com/api/ai/prompt/songs',
                formData,
                {
                    headers: {
                        'API-KEY': apiKey,
                    },
                }
            );

            if (response.data && response.data.music_file_path){
                setGenerateMusic(response.data.music_file_path);
            }
        } catch (error) {
            console.error('Error generating music:', error);
            alert('Error generating music. Please try again.');
        }
        console.log('Generating music started...:', {title, genre, prompt});
    };
    
    return (
      <div>
         <h1 className='text-3xl font-bold text-gray-500 mb-4 underline'>Music Creation Page</h1>

         <div>
            <div>
                <label>song title</label>
                <input 
                    type='text' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='Enter song title'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' 
                />
            </div>

            <div>
                <label>genre</label>
                <select 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' 
                >
                    <option value=''>Select genre</option>
                    <option value='pop'>Pop</option>
                    <option value='rock'>Rock</option>
                    <option value='jazz'>Jazz</option>
                    <option value='blues'>Blues</option>
                    <option value='electronic'>Electronic</option>
                </select>
            </div>

            <div>
                <label>Explain the Music</label>
                <textarea 
                    value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)} 
                    placeholder='How do you want the music to sound?'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
            </div>

            <button 
                onClick={handleGenerate}
                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'
            >
                Generate Music
            </button>
            {generateMusic && (
                <div>
                    <h3>Generated Music</h3>
                    <audio controls>
                        <source src={generateMusic} type='audio/mpeg' />
                    </audio>
                </div>
            )}
            </div>
         </div>
    );
}


export default CreatePage;