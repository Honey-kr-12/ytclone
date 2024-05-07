import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import vid from '../../components/video/vid.mp4'
import {FaHistory} from 'react-icons/fa'
import './Library.css'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Library = ({ getWeatherClassName}) => {
//   const vids = [
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
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

const historyList = useSelector((state) => state.HistoryReducer);
const likedVideoList = useSelector((state) => state.likedVideoReducer);
const watchLaterList = useSelector((state) => state.watchLaterReducer);

  return (
    <div className={CurrentUser ? `weather ${getWeatherClassName ()}` : 'container_Pages_App'} >
      <LeftSidebar/>  
      <div className="container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList page={"History"} CurrentUser={CurrentUser?.result._id} videoList={historyList} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList page={"Watch Later"} CurrentUser={CurrentUser?.result._id} videoList={watchLaterList} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Video</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList page={"Liked Video"} CurrentUser={CurrentUser?.result._id} videoList={likedVideoList} />
          </div>
        </div>
        </div>
      </div>
  )
}

export default Library
