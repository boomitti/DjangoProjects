import { useState, useEffect } from 'react'; // Import useEffect
import './App.css';
import { Card, CardGroup } from 'semantic-ui-react'

function App() {
  const [heroes, setHeroes] = useState([]); // Fix the variable name to "heroes"
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/');
        
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const heroesData = await res.json();
        setHeroes(heroesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Include an empty dependency array for useEffect

  return (
    <>
      <CardGroup>
        {heroes.map(hero => (
          <Card
            key={hero.id}
            image='/images/avatar/large/elliot.jpg'
            header={hero.name}
            meta='ID: {hero.id}'
            description={hero.description}
          />
        ))}
      </CardGroup>
    </>
  );
}

export default App;
