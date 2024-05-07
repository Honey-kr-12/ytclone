import React, { useState } from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import SearchList from './SearchList'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const[searchListA, setSearchList] = useState(false)
    // const TitleArray = ["Video1","Video2","Animation","video","Movies"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()))
    const TitleArray = useSelector(s=>s?.videoReducer)
?.data?.filter(q=> q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle)
// console.log(TitleArray)
  return (
    <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="search_div">
                <input type="text" value={searchQuery} className='iBox_SearchBar' placeholder='Search' onClick={e => setSearchList(true)} onChange={e => setSearchQuery(e.target.value)} />
                <Link to={`/search/${searchQuery}`}>
                <FaSearch className='searchIcon_SearchBar' onClick={(e) => setSearchList(false)} />
                </Link>
                <BsMicFill className='Mic_SearchBar' />
                {
                    searchQuery&&  searchListA&&
                    <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray} />
                }
            </div>
        </div>
    </div>
  )
}

export default SearchBar
