import React, { useState } from 'react'
import './Auth.css'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Auth = ({ User, setAuthBtn, setEditCreateChannel }) => {
    const dispatch = useDispatch()
    const onLogOutSuccess = () => {
        dispatch(setCurrentUser(null))
        alert("Log Out")
    }

    const {t} = useTranslation();
    return (
        <div className='Auth_container' onClick={()=>setAuthBtn(false)} >
            <div className='Auth_container2' >
                <p className="User_Details">
                    <div className="Chanel_logo_App">
                        <p className="fstChar_logo_App">
                            {
                                User?.result.name ? (
                                    <>{
                                        User?.result.name.charAt(0).toUpperCase()
                                    }
                                    </>
                                ) : (
                                    <>{
                                        User?.result.email.charAt(0).toUpperCase()
                                    }</>
                                )
                            }
                        </p>
                    </div>
                    <div className="email_Auth">{User?.result.email}</div>
                </p>
                <div className="btns_Auth">
                    {
                        User?.result.name ? <>
                        {
                            <Link className='btn_Auth' to={`/profile/${User?.result._id}`} >
                                Your Profile
                              </Link>
                        }
                        </> : <>
                            <input value="Create Your Channel" type="submit" className="btn_Auth" onClick={() => setEditCreateChannel(true)} />
                        </>
                    }
                </div>
                <div className="btns_Auth">
                    {
                        User?.result.name ? <>
                        {
                            <Link className='btn_Auth' to={`/channel/${User?.result._id}`} >
                                Your Channel
                              </Link>
                        }
                        </> : <>
                            <input value="Create Your Channel" type="submit" className="btn_Auth" onClick={() => setEditCreateChannel(true)} />
                        </>
                    }
                </div>
                <div>
                    <GoogleLogout
                        clientId={"731744303443-heliea1g5rdg0mq97j8j3t50mp3s32ra.apps.googleusercontent.com"}
                        onLogoutSuccess={onLogOutSuccess}
                        render={(renderProps) => (
                            <div onClick={renderProps.onClick} className='btn_Auth' >
                                <BiLogOut /> {t('LogOut')}
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Auth
