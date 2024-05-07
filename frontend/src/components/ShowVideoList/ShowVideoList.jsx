import React from 'react'
import vid from '../../components/video/vid.mp4'
import ShowVideo from '../ShowVideo/ShowVideo'
import { useSelector } from 'react-redux'

const ShowVideoList = ({videoId}) => {
    const vids = useSelector(state => state.videoReducer)
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
    <div className='Container_ShowVideoGrid'>
    {vids?.data?.filter(q=>q._id===videoId).map(vi =>
     {
      return (
        <div key={vi._id} className="video_box_app">
              <ShowVideo vids={vi} />
          </div>
      ) 
    })}
  </div>
  )
}

export default ShowVideoList