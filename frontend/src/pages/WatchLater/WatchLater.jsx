
import React from 'react'
import vid from '../../components/video/vid.mp4'
import WHL from '../../components/WHL/WHL'
import { useSelector } from 'react-redux'

const WatchLater = ({getWeatherClassName }) => {

  const watchLaterList = useSelector(state => state.watchLaterReducer)
  // console.log("wl data",watchLaterList);

  console.log(getWeatherClassName);
  
  
//   const WatchLater = [
//     {
//       _id:1,
//         video_scr:vid,
//         Chanel:"kndncjncd",
//         title:"video 1",
//         Uploader:"abc",
//         descripion:"description of the videp"
//     },
//     {
//         _id:2,
//         video_scr:vid,
//         Chanel:"3232332322323",
//         title:"video 1",
//         descripion:"description of the videp"
//     },
//     {
//         _id:3,
//         video_scr:vid,
//         Chanel:"3d3d3d3d3",
//         title:"video 1",
//         descripion:"description of the videp"
//     },
//     {
//         _id:4,
//         video_scr:vid,
//         Chanel:"3d3d3d3d3",
//         title:"video 1",
//         descripion:"description of the videp"
//     }
// ]
// console.log("wl data",WatchLater);
  return (
    <div>
      <WHL getWeatherClassName={getWeatherClassName} page={"Watch Later"} videoList={watchLaterList} />
    </div>
  )
}

export default WatchLater
