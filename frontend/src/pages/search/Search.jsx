import React from 'react'
// import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/video/vid.mp4'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Search = () => {
    const {searchQuery} = useParams();
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse();
  return (
    <div className='container_Pages_App'>
        <LeftSidebar />
        <div className="container2_Pages_App">
            <h3 style={{color:"white"}}>Search Result for { searchQuery }</h3>
        <ShowVideoGrid vids={vids} />
        </div>
    </div>
  )
}

export default Search
