import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json(); // Convert response to JSON
        setData(data.results); // Set the converted data as the state
        setNextPage(data.next);
      } catch (e) {
        console.error('you have issues:', e);
      }
    }

    fetchApi();
  }, []);
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        List of Star Wars Characters
        {data.map((item) => (
          <div>
            <ul>
              {/* [TO DO] need to add interface for data */}
              <li>{item.name}</li>
              <li>{item.height}</li>
              <li>{item.mass}</li>
              <li>{item.gender}</li>
            </ul>
          </div>
        ))}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
