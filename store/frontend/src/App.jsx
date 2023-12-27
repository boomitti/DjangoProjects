import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {Card, CardGroup, Image} from 'semantic-ui-react'

function App() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          // Make a GET request to the specified URL
          const response = await axios.get('http://127.0.0.1:8000/products/');
  
          // Set the retrieved data in the state
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the fetch data function
      fetchData();
    }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <>
      <h1>Product List</h1>
      <CardGroup>
        {products.map((product) => (
          <Card>
            <Card.Content>
               <Image src={product.image} wrapped ui={false} />
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>
                <span className='price'>$ {product.price}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </>
  )
}

export default App
