import React from 'react'
import './LeftSidebar.css'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import shorts from './shorts.png'
import { FaHistory } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const DrawerSidebar = ({toggleDrawer, toggleDrawerSidebar}) => {
  const { t } = useTranslation();
  return (
        <div className="container_DrawaerLeftSidedbar" style={toggleDrawerSidebar} >
            <div className="container2_DrawaerLeftSidebar">
                <div className="Drawer_leftsidebar">
                    <NavLink to={'/'} className="icon_sidebar_div">
                        <p>
                            <AiOutlineHome size={22} className={'icon_sidebar'} style={{margin:"auto 0.7rem"}} />
                            <div className="text_sidebar_icon">{t('Home')}</div>
                        </p>
                    </NavLink>
                    <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('Explore')}</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img
                src={shorts}
                width={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('Shorts')}</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdSubscriptions
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('Subscription')}</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_Drawerleftsidebar">
          <NavLink to={'/library'} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('Library')}</div>
            </p>
          </NavLink>
          <NavLink to={'/history'} className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('History')}</div>
            </p>
          </NavLink>
          <NavLink to={'/yourvideos'} className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('YourVideos')}</div>
            </p>
          </NavLink>
          <NavLink to={'/watchlater'} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('WatchLater')}</div>
            </p>
          </NavLink>
          <NavLink to={'/likedvideo'} className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">{t('LikedVideos')}</div>
            </p>
          </NavLink>
        </div>
            <div className="subScriptions_lsdbar">
                <h3>{t('YourSubscription')}</h3>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
                <div className="chanel_lsdbar">
                    <p>C</p>
                    <div>chanel</div>
                </div>
            </div>
        </div>
        {/* <div className="container3_DrawerLeftSidebar"  ></div> */}
        <div className="container3_DrawerLeftSidebar" onClick={() => toggleDrawer()} ></div>
    </div>

  )
}

export default DrawerSidebar
