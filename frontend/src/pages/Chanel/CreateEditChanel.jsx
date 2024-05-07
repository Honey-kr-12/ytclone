import React, { useState } from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/chanelUser'

const CreateEditChanel = ({setEditCreateChannel}) => {
    // const CurrentUser = {
    //     result: {
    //       email: "abzxy50312@gmail.com",
    //       joinedOn: "2222-07-15T09:57:23.489Z",
    //     },
    //   };

    const CurrentUser = useSelector(state => state.currentUserReducer)

      const [name, setName] = useState(CurrentUser?.result.name);
      const [desc, setDesc] = useState(CurrentUser?.result.email);

      const dispatch = useDispatch()

      const handleSubmit = () => {
        if (!name) {
            alert("please enter name")
        } else if(!desc){
            alert("please enter desc")
        } else {
            dispatch(updateChanelData(CurrentUser?.result._id,{
              name:name,
              desc:desc
            }));
            setEditCreateChannel(false);
            setTimeout(() => {
                dispatch(login({email: CurrentUser?.result.email}))
            }, 5000);
        }
      }
  return (
    <div className='container_CreateEditChanel' >
        <input type="text" name="text" value={"X"} className='ibtn_x' onClick={() => setEditCreateChannel(false)} />
    <div className='container2_CreateEditChanel' >
    <h1> {
            CurrentUser?.result.name? <>
             Edit_
            </>:<>
             Create_</>
        } 
        Your channel</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="text" placeholder='enter your/channel name' id="" className="ibox" />
        <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} rows="15" placeholder='enter channel description' className='ibox' ></textarea>
        <input type="submit" value="Submit" className='ibtn' onClick={handleSubmit} />
    </div>
    </div>
  )
}

export default CreateEditChanel
