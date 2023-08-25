import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './Components/Banner/Banner';
import { Sections } from './Components/Section/Section';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000);

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {
        isLoading ? <h1 className='loading-text'>Loading...</h1> : <><Banner />
          <Sections /></>
      }
    </div>
  );
}

export default App;
