import React from 'react'
import Home from '../pages/Home/Home'
import { Route, Routes, Links  } from 'react-router-dom'
import Library from '../pages/Library/Library'
import WatchHistory from '../pages/WatchHistory/WatchHistory'
import WatchLater from '../pages/WatchLater/WatchLater'
import LikedVideo from '../pages/LikedVideo/LikedVideo'
import YourVideo from '../pages/YourVideos/YourVideo'
import VideoPage from '../pages/VideoPage/VideoPage'
import Chanel from '../pages/Chanel/Chanel'
import Search from '../pages/search/Search'
import Location from '../pages/Location/Location'
import Premium from '../pages/Premium/Premium'
import Success from '../pages/Premium/Success'
import Cancel from '../pages/Premium/Cancel'
import Profile from '../pages/Profile/Profile'
// import Weather from '../pages/Weather/Whether'

const AllRoutes = ({setEditCreateChannel, getWeatherClassName, CurrentUser, setVideoUploadPage}) => {
  return (
    <Routes>
     <Route path='/' element={<Home CurrentUser={CurrentUser} getWeatherClassName={getWeatherClassName} />} />
     <Route path='/library' element={<Library CurrentUser={CurrentUser} getWeatherClassName={getWeatherClassName} />} />
     {/* <Route path='/weather' element={<Weather />} /> */}
     <Route path="/history" element={<WatchHistory  getWeatherClassName={getWeatherClassName} />} />
      <Route path="/watchlater" element={<WatchLater getWeatherClassName={getWeatherClassName} />} />
      <Route path="/likedvideo" element={<LikedVideo getWeatherClassName={getWeatherClassName} />} />
      <Route path="/yourvideos" element={< YourVideo getWeatherClassName={getWeatherClassName} />} />
      <Route path="/location" element={<Location />} />
      <Route path="/success/:Sid" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/videopage/:vid" element={<VideoPage getWeatherClassName={getWeatherClassName} />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/channel/:Cid" element={<Chanel CurrentUser={CurrentUser} getWeatherClassName={getWeatherClassName} setVideoUploadPage={setVideoUploadPage} setEditCreateChannel={setEditCreateChannel} />} />
      <Route path="/profile/:Pid" element={<Profile CurrentUser={CurrentUser} getWeatherClassName={getWeatherClassName} setVideoUploadPage={setVideoUploadPage} setEditCreateChannel={setEditCreateChannel} />} />
    </Routes>
  )
}

export default AllRoutes
