import React from 'react'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import DescribeChanel from './DescribeChanel'
import vid from '../../components/video/vid.mp4'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Chanel = ({setEditCreateChannel,setVideoUploadPage, getWeatherClassName, CurrentUser}) => {
    const {Cid} = useParams()
    const vids = useSelector(state => state.videoReducer)?.data?.filter(q=>q?.videoChanel === Cid).reverse();
    // const vids = [
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
  return (
    <div className={CurrentUser ? `weather ${getWeatherClassName ()}` : 'container_Pages_App'}>
        <LeftSidebar />
        <div className="container2_Pages_App">
            <DescribeChanel Cid={Cid} setVideoUploadPage={setVideoUploadPage} setEditCreateChannel={setEditCreateChannel} />
        <ShowVideoGrid vids={vids} />
        </div>
    </div>
  )
}

export default Chanel
