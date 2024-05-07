    import React, { useState } from 'react'
    import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux'
import {CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { uploadVideo } from '../../actions/video' 

    const VideoUpload = ({setVideoUploadPage}) => {
      const CurrentUser = useSelector(state => state.currentUserReducer)
      const dispatch = useDispatch()

      const [title, setTitle] = useState("");
      const [videoFile, setVideoFile] = useState("");

      const handleSetVideoFile = (e) => {
        setVideoFile(e.target.files[0])
      }

      const [progress, setProgress] = useState(0);

      const fileOptions = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
          setProgress(percentage);
          if (percentage === 100) {
            setTimeout(function () {}, 3000);
            setVideoUploadPage(false);
          }
        }
      }

      const uploadVideoFile = () => {
        if (!title) {
          alert("please enter a title of the video")
        } else if (!videoFile) {
          alert("please attach a video file")
        } else if (videoFile.size > 100000000000000 ) {
          alert("please attach a video file less than 1kb")
        } else {
          console.log("1")
          const fileData = new FormData();
          fileData.append("file",videoFile);
          fileData.append("title",title);
          fileData.append("chanel",CurrentUser?.result._id);
          fileData.append("Uploder",CurrentUser?.result.name);
          console.log("filedata",videoFile)
          dispatch(
            uploadVideo({
              fileData: fileData,
              fileOptions: fileOptions,
            })
          );
        }
      }

      return (
        <div className='container_VidUpload'>
            <input type="submit" name='text' value="X" className="ibtn_x" onClick={() => setVideoUploadPage(false)} />
          <div className="container2_VidUpload">  
            <div className="ibox_div_vidupload">
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} maxLength={30} placeholder='enter title of the video' className="ibox_vidupload" />
          <label htmlFor="file" className='ibox_vidupload btn_vidupload' >
            <input type="file" name="file" className="ibox_vidupload" style={{fontSize:"1rem"}} onChange={e => {handleSetVideoFile(e)}} />
          </label>
          </div>
            <div className="ibox_div_vidupload">
              <input onClick={() => uploadVideoFile()} type="submit" value="Upload" className="ibox_vidupload btn_vidUpload" />
            </div>
            <div className="loader ibox_div_vidupload">
              <CircularProgressbar 
              value={progress}
              text={`${progress}`}
              styles={
                buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(255,255,255,${progress / 100})`,
                  textColor: "#f88",
                  trailColor: "#adff2f",
                  backgroundColor: "#3e98c7",
                })
              }
               />
            </div>
            </div>
        </div>
      )
    }
    
    export default VideoUpload
    