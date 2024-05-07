import React from 'react'
import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/video/vid.mp4'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Home = ({getWeatherClassName, CurrentUser}) => {
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q=>q).reverse();
  // console.log(videosFile);

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

const NavList = [
  "All",
  "Python",
  "Java",
  "C++",
  "Movies",
  "Science",
  "Animation",
  "Gaming",
  "Comedy"
]

const {t} = useTranslation();

  return (
    <>
    <div className={CurrentUser ? `weather ${getWeatherClassName ()}` : 'container_Pages_App'} >
        <LeftSidebar />
        <div className="container2_Pages_App">
          {/* <button onClick={getWeather} >hellooo</button> */}
          <div className="navigation_Home">
            {
              NavList.map(m => {
                return (
                  <p key={m} className='btn_nav_home'>
                  {t(`navList.${m}`)}
                </p>
                )
              })
            }
          </div>
        <ShowVideoGrid vids={vids} />
        </div>
        </div>
    </>
  )
}

export default Home
