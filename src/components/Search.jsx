import React from 'react'
import Cuisines from './Cuisines'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='searchPage'>
      <div className="search">
        <input type="text"  placeholder='Search For Restaurant and Foods'/>
        <div className="searchIcon"><FaSearch/></div>
        
      </div>
      <h3 className='res'>Popular Cuisines</h3>
      <Cuisines/>
    </div>
  )
}

export default Search