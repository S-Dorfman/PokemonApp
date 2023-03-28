
import React from 'react';
import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  // destructure array [current state, method to update] ([default state])
  const [pokemon, setPokemon] = useState([])
  //create state for different pages
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  //loading state initialize as true
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true)
      let cancel
      // fetch data with axios, map over results and get name 
      //set next and prev page 
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
      })

  //?cancel old request when making a new one - to prevent overwriting 
      return () => cancel()        
  
      //every time page changes - rerender code to get new data
    }, [currentPageUrl])

    //function to change pages
    function gotoNextPage() {
      setCurrentPageUrl(nextPageUrl)
    }
    function gotoPrevPage() {
      setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return "Loading..."


  return (
  <>
    <PokemonList pokemon={pokemon} />
    <Pagination 
    // if nextPageUrl is true gotoNexPAge else pass null
    gotoNextPage={nextPageUrl ? gotoNextPage : null}
    gotoPrevPage={prevPageUrl ? gotoPrevPage: null}
    />
    </>
    )
}

export default App;
