import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'

const ShowVideoGrid = ({vids}) => {
  return (
    <div className='Container_ShowVideoGrid' >
      {vids?.map(vi =>
       {
        return (
            <div className="video_box_app" key={vi._id}>
                <ShowVideo vids={vi} />
            </div>
        )
      })}
    </div>
  )
}

export default ShowVideoGrid
