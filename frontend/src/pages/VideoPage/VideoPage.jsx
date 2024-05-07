import React, { useEffect } from 'react'
import vid from '../../components/video/vid.mp4'
import './VideoPage.css'
import moment from 'moment'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../components/Comments/Comments'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToHistory } from '../../actions/History'
import { viewVideo } from '../../actions/video'
import {useTranslation} from 'react-i18next'

const VideoPage = ({getWeatherClassName}) => {
    const {vid} = useParams();
    // const chanels = useSelector(state => state?.chanelReducers)
    // const currentChanel = chanels.filter(c=> c._id === Cid)[0];
    const vids = useSelector(state => state.videoReducer);
    const vv = vids?.data.filter(q => q._id === vid)[0];

    const CurrentUser = useSelector((state) => state?.currentUserReducer);

    const dispatch = useDispatch();

    const handleHistory = () => {
        dispatch(
            addToHistory(
                {
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }
            )
        )
    }
    const handleViews = () => {
        dispatch(viewVideo({
            id:vid,
        }))
    }
    useEffect(() => {
        if (CurrentUser) {
            handleHistory();
        }
        handleViews();
    },[])

    const { t } = useTranslation();
  return (
    <>
    <div className={CurrentUser ? `weather ${getWeatherClassName ()}` : "container_videoPage"}>
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
                <video src={`http://localhost:5500/${vv?.filePath}`} className={'video_ShowVideo_videoPage'} loop controls autoPlay ></video>
                <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage"> {vv?.videoTitle}</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    {vv?.Views} {t("Views")} <div className="dot"></div>{" "}
                    {moment(vv?.createdAt).fromNow()}
                  </div>
                        <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                        </div>
                    </div>

                    <Link to={`/channel/${vv?.videoChanel}`} className="chanel_details_videoPage">
                        <b className='chanel_logo_videoPage' >
                            <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className='chanel_name_videoPage'> {vv?.Uploder} </p>
                    </Link>
                    <div className="comments_VideoPage">
                        <h2 ><u>{t("Comments")}</u></h2>
                        <Comments videoId={vv._id} />
                    </div>
                </div>
            </div>
            <div className={CurrentUser ? `container_videoPage weather` : "container_videoPage"}>
                More Video
            </div>
        </div>
        </div> 
    </>
  )
}

export default VideoPage
