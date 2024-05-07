import React from 'react'
import vid from '../../components/video/vid.mp4'
import WHL from '../../components/WHL/WHL'
import { useSelector } from 'react-redux'

const WatchHistory = ({ getWeatherClassName}) => {
  const historyList = useSelector(state => state.HistoryReducer)
  // console.log("hlist",historyList);
//   const history = [
//     {
//         _id:1,
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
console.log(getWeatherClassName);
  return (

    <div>
      <WHL  getWeatherClassName={getWeatherClassName} page={"History"} videoList={historyList} />
    </div>
  )
}

export default WatchHistory
