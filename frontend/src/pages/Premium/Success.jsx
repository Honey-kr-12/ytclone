import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {updatePremiumData} from '../../actions/auth'

const Success = () => {
  const Sid = useSelector(state => state.currentUserReducer.result._id)
  const CurrentUser  = useSelector(state => state.currentUserReducer)
    const dispatch = useDispatch()
  const handlePremim = () => {
    dispatch(updatePremiumData({
        _id:Sid,
    }))
}
useEffect(() => {
    handlePremim();
},[])
  return (
    <div>
      <p>Well Done You are now a premium User</p>
      <Link to={'/'}> HomePage</Link>
    </div>
  )
}

export default Success
