import React from 'react'
import './ShowVideo.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ShowVideo = ({vids}) => {
  const {t} = useTranslation();
  console.log(vids);
  return (
    <>
    <Link to={`/videopage/${vids?._id}`}>
        <video 
        src={`http://localhost:5500/${vids?.filePath}`}
        className='video_ShowVideo' 
        > 
        </video>
    </Link>
    <div className='video_description'>
        <div className='Chanel_logo_App'>
            <div className='fstChar_logo_App'>
                <>{vids?.Uploder?.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className='video_details'>
            <p className='title_vid_ShowVideo'>{vids?.videoTitle}</p>
            <pre className='vid_views_UploadTime'>{vids?.Uploder}</pre>
            <pre className='vid_views_UploadTime'>{vids?.Views} {t("Views")} <div className="dot"></div>{moment(vids?.createdAt).fromNow()}  </pre>
      </div>
    </div>
    </>
  )
}

export default ShowVideo
