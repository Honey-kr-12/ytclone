import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useTranslation } from 'react-i18next'
import logo from './logo.ico'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import SearchBar from './SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import { gapi } from 'gapi-script'
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'
import Auth from '../../pages/Auth/Auth'
import Language from '../../api/Language'
import Plogo from './images.jpeg'

const Navbar = ({ weatherCondition, toggleDrawer, setEditCreateChannel }) => {
    const { t } = useTranslation();

    const [authBtn, setAuthBtn] = useState(false)

    //     const CurrentUser = {
    //     result: {
    //       email: "abzxy50312@gmail.com",
    //       joinedOn: "2222-07-15T09:57:23.489Z",
    //       geolocation:{
    //         city:"ghaxiza",
    //         country:"IN"
    //       },
    //       isPremium:false
    //     },
    //   };
    const CurrentUser = useSelector(state => state.currentUserReducer)
    // console.log(CurrentUser);

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "731744303443-heliea1g5rdg0mq97j8j3t50mp3s32ra.apps.googleusercontent.com",
                scope: "email",
            });
        }
        gapi.load("client:auth2", start)
    }, [])

    const dispatch = useDispatch()

    const onSuccess = (response) => {
        const Email = response?.profileObj.email;
        console.log(Email)
        dispatch(login({ email: Email }))
    }
    const onFailure = (response) => {
        // const Email = response?.profileObj.email;
        console.log("failure ", response)
    }
    return (
        <>
            <div className='Container_Navbar'>
                <div className="Burger_Logo_Navbar">
                    <div className="burger" onClick={() => toggleDrawer()}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>

                    <Link to={'/'} className='logo_div_Navbar'>
                        <img src={logo} alt="YT" />
                        <p className='logo_title_navbar'>YouTube</p>
                        <p className='logo_title_country'> {CurrentUser?.result.geolocation.country}</p>
                    </Link>
                </div>
                <SearchBar />
               {
               CurrentUser ?  CurrentUser?.result.isPremium ? '' :
               <Link to={'/premium'}>
             <img src={Plogo} alt={Plogo} className={"Plogo"} />
         </Link> : ''
               }


                {
                    CurrentUser ? <>
                        <p className='logo_title_navbar'>
                            {CurrentUser?.result.geolocation.city}
                        </p>

                    </> : <></>
                }
                {/* //////////////////// */}
                {/* <Link to={`/success/${CurrentUser?.result._id}`}>Fake premium</Link> */}
                <Language />
                <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
                <div className="apps_Box">
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                </div>
                <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
                <div className="Auth_cont_Navbar">
                    {
                        CurrentUser ? (
                            <>
                                {/* <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}> */}
                                <div className={CurrentUser?.result.isPremium ? `Chanel_logo_App_Premium` : `Chanel_logo_App`} onClick={() => setAuthBtn(true)}>
                                    {CurrentUser?.result.isPremium ? 
                                    <>
                                        <img
                                            src={`https://avatar.iran.liara.run/public/boy?username=${CurrentUser?.result.name}`}
                                            alt="Premium User Profile Image"
                                            className="Chanel_logo_App_Premium"
                                        />
                                        </>
                                      : <>
                                    <p className="fstChar_logo_App">
                                        {
                                            CurrentUser?.result.name ? (
                                                <>
                                                    {CurrentUser?.result.name.charAt(0).toUpperCase()}
                                                </>
                                            ) : (
                                                <>
                                                    {CurrentUser?.result.email.charAt(0).toUpperCase()}
                                                </>
                                            )
                                        }
                                    </p>
                                    </>
}
                                </div>
                            </>
                        ) : (
                            <>
                                <GoogleLogin clientId={"731744303443-heliea1g5rdg0mq97j8j3t50mp3s32ra.apps.googleusercontent.com"} onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    render={(renderProps) => (
                                        <p onClick={renderProps.onClick} className="Auth_Btn">
                                            <BiUserCircle size={22} />
                                            <b>{t('SignIn')}</b>
                                        </p>)} />
                            </>
                        )
                    }
                </div>
            </div>
            {
                authBtn &&
                <Auth setEditCreateChannel={setEditCreateChannel} User={CurrentUser} setAuthBtn={setAuthBtn} />
            }
        </>
    )
}

export default Navbar
