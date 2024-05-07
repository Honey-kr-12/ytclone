// import React from 'react'
// import Profile from '../pages/Profile/Profile';
// import { useSelector } from 'react-redux';
// import './test.css'
// import axios from 'axios';

// const Test = () => {
//   const CurrentUser = useSelector(state => state.currentUserReducer);
//   const cordinates =  CurrentUser?.result.geolocation.loc
//   const [long, lat] = cordinates.split(',');
//   const Apikey= "691d68333b92d3a59b1ca936a9de95ed";
//   const getImages = async () => {
//     try {
//     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Apikey}`);
//     const data = res.data;
//     console.log(data);
//     } catch (error) {
//         console.log("ERROR OCCURED 💥💥" + error );
//     }
// }

//   return (
//     <div className='main' >
//       {/* <Profile extractBrowserAndOS={extractBrowserAndOS} userAgent={userAgent} /> */}
//       <button onClick={getImages} >Get data</button>
//     </div>
//   )
// }

// export default Test
