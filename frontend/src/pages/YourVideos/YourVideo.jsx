import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/video/vid.mp4'
import '../Home/Home.css'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const YourVideo = ({getWeatherClassName}) => {
  const { t } = useTranslation();
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
const CurrentUser = useSelector(state => state?.currentUserReducer);
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();
  return (
    <div className={CurrentUser ? `weather ${getWeatherClassName ()}` : 'container_Pages_App'} >
        <LeftSidebar />
        <div className="container2_Pages_App">
          <div className="container_yourvideo">
          <h1>{t('YourVideos')}</h1>
          {
            CurrentUser ? (<>
        <ShowVideoGrid vids={vids} />
            </>):<>
            <h3>Login to see your uploaded video</h3>
            </>
          }
          </div>
        </div> 
    </div>
  )
}

export default YourVideo
