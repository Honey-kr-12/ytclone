import React, { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import './LikeWatchLaterSaveBtns.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addToLikedVideo, deleteLikedVideo } from '../../actions/likedVideo'
import { addToWatchLater, addTowatchLater, deleteWatchLater } from '../../actions/watchLater'
import {useTranslation} from 'react-i18next'


const LikeWatchLaterSaveBtns = ({vv, vid}) => {
  const { t } = useTranslation();
    
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const dispatch = useDispatch();
    const [saveVideo, setSaveVideo] = useState(false);
    const [dislikeBtn, setDislikeBtn] = useState(false)
    const [likeBtn, setLikeBtn] = useState(false);

    const likedVideoList = useSelector(state => state.likedVideoReducer);
    const watchLaterList = useSelector(state => state.watchLaterReducer);

    useEffect(()=>{
        likedVideoList?.data.filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m=>setLikeBtn(true))
        watchLaterList?.data.filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m=>setSaveVideo(true))
    },[])

    // const toggleSavedVideo = () => {
    //     if (saveVideo) {
    //         setSaveVideo(false);
    //         // dispatch(deleteWatchLater({
    //         //     videoId: vid,
    //         //     Viewer: CurrentUser?.result._id
    //         // }))
    //     } else{
    //       dispatch(addToWatchLater({
    //           videoId: vid,
    //           Viewer: CurrentUser?.result._id,
    //       }))
    //         setSaveVideo(true);
    //     }
    // }
    const toggleSavedVideo = () => {
      if (CurrentUser) {
        if (saveVideo) {
          setSaveVideo(false);
          dispatch(
            deleteWatchLater({
              videoId: vid,
              Viewer: CurrentUser?.result._id,
            })
          );
        } else {
          setSaveVideo(true);
          dispatch(
            addTowatchLater({
              videoId: vid,
              Viewer: CurrentUser?.result._id,
            })
          );
        }
      } else {
        alert("Plz Login To save the video !");
      }
    };

    const toggleLike = (e,lk) => {
       if (CurrentUser) {
        if (likeBtn) {
            setLikeBtn(false)
            dispatch(
                likeVideo({
                    id: vid,
                    Like: lk - 1,
                })
            )
            dispatch(deleteLikedVideo({
                videoId:vid,
                Viewer: CurrentUser?.result._id
            }))
        } else {
            setLikeBtn(true)
            dispatch(
                likeVideo({
                    id: vid,
                    Like: lk + 1,
                })
            )
            dispatch(addToLikedVideo({
                videoId:vid,
                Viewer: CurrentUser?.result._id
            }))
            setDislikeBtn(false)
        }
       } else {
        alert("login to give a like")
       }
    }
    const toggleDislike = (e,lk) => {
       if (CurrentUser) {
        if (dislikeBtn) {
            setDislikeBtn(false);
          } else {
            setDislikeBtn(true);
            if (likeBtn) {
              dispatch(
                likeVideo({
                  id: vid,
                  Like: lk - 1,
                })
              );
              dispatch(deleteLikedVideo({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
              }))
            }
            setLikeBtn(false);
          }
       }else {
        alert("login to give a like")
       }
    }

  return (
    <div className='btns_cont_videoPage' >
      <div className="btn_VideoPage">
        <BsThreeDots />
      </div>
      <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={(e) => toggleLike(e,vv.Like)} >
        {likeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videoPage" />
            </>
          )}
          <b>{vv.Like}</b>
        </div>
        <div className="like_videoPage" onClick={(e) => toggleDislike(e,vv.Like)}  >
        {dislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>{t('Dislike')}</b>
        </div>
        <div className="like_videoPage" onClick={() => toggleSavedVideo()} >
            {
                saveVideo? <>
               <MdPlaylistAddCheck size={22} className="btns_videoPage" />
              <b>{t('Save')}d</b>
                </> : <>
                <RiPlayListAddFill size={22} className="btns_videoPage" />
              <b>{t('Save')}</b>
                </>
            }
        </div>
        <div className="like_videoPage"  >
                <>
                <RiHeartAddFill size={22} className='btns_videoPage' />
                <b>{t('Thanks')}</b>
                </>
        </div>
        <div className="like_videoPage"  >
                <>
                <RiShareForwardLine size={22} className='btns_videoPage' />
                <b>{t("Share")}</b>
                </>
        </div>
      </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
