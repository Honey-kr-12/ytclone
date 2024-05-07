import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './components/AllRoutes'
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar'
import CreateEditChanel from './pages/Chanel/CreateEditChanel'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllChanel } from './actions/chanelUser'
import VideoUpload from './pages/VideoUpload/VideoUpload'
import { getAllVideo } from './actions/video'
import { getAllLikedVideo } from './actions/likedVideo'
import { getAllwatchLater } from './actions/watchLater'
import { getAllHistory } from './actions/History'
import axios from 'axios'

const App = () => {

  //     const CurrentUser = {
  //   result: {
  //     email: "abzxy50312@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //     geolocation:{
  //       city:"ghaxiza",
  //       country:"IN",
  //       loc:"28.6654,77.4391"
  //     },
  //     isPremium:false
  //   },
  // };
  const CurrentUser = useSelector(state => state.currentUserReducer);
  const cordinates =  CurrentUser ? CurrentUser?.result.geolocation.loc : "" 
  const [lat, long] = cordinates?.split(',');
  const [weatherCondition, setWeatherCondition] = useState('');
  const Apikey= process.env.APIKEY;

  const getWeather = async () => {
    try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Apikey}`);
    const data = res.data.weather[0].icon;
    setWeatherCondition(res.data.weather[0].icon);
    console.log(data);
    } catch (error) {
        console.log("ERROR OCCURED 💥💥" + error );
    }
}

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAllLikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory())
  },[dispatch])

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none",
  });

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display:"flex"
      })
    } else {
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }

  const getWeatherClassName  = () => {
    switch (weatherCondition) {
      case '01d':
        return 'clear-sky-day';
      case '01n':
        return 'clear-sky-night';
      case '02d' || '03d' || '04d':
        return 'cloud-day';
      case '02n' || '03n' || '04n':
        return 'cloud-night';
      case '09d' ||  '10d' ||  '11d':
        return 'rain-day';
      case '09n' || '10n' || '11n':
        return 'rain-night';
      case '13d':
        return 'snow-day';
      case '13n':
        return 'snow-night';
      case '50d' :
        return 'mist-day';
      case '50n':
        return 'mist-night';
      default:
        return 'clear-sky-night';
    }
  };

  const [videoUploadPage, setVideoUploadPage] = useState(false)
  const [editCreateChennel, setEditCreateChannel] = useState(false)

  const setWeather = CurrentUser ? getWeather() : '';
  // const setWeather = null;

  return (

    <Router>
      {
      videoUploadPage &&  <VideoUpload setVideoUploadPage={setVideoUploadPage} />  
      }
      {
        editCreateChennel &&  <CreateEditChanel setEditCreateChannel={setEditCreateChannel} />
      }
       <Navbar weatherCondition={weatherCondition} toggleDrawer={toggleDrawer} setEditCreateChannel={setEditCreateChannel} />
       {
        <DrawerSidebar  toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
        }
      <AllRoutes CurrentUser={CurrentUser} getWeatherClassName={getWeatherClassName} setVideoUploadPage={setVideoUploadPage} setEditCreateChannel={setEditCreateChannel} />
    </Router>
  )
}

export default App