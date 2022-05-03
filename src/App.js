import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import CharacretGrid from './Components/CharacterGrid'
import axios from 'axios'
import Search from './Components/Search';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
      
      setItems(result.data)
      setIsLoading(false)
    }
    
    fetchItems()
    console.log(isLoading)

  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacretGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
