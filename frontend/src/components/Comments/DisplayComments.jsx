import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment'

const DisplayComments = ({cId,userCommented, userId,commentOn, commentBody}) => {
  const [edit, setEdit] = useState(false);
  const [cmtBdy, setCmtBdy] = useState("");
  const [cmtId, setcmtId] = useState("");

  const CurrentUser = useSelector((state) => state?.currentUserReducer);


  const dispatch = useDispatch();
  const handleEdit = (ctId,ctBdy) => {
    setEdit(true);
    setcmtId(ctId);
    setCmtBdy(ctBdy)
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cmtBdy) {
          alert("Type Your comments");
        } else {
          dispatch(
            editComment({
              id: cmtId,
              commentBody: cmtBdy,
            })
          );
          setCmtBdy("");
        }
        setEdit(false);
      };

      const handleDel=(id)=>{
        dispatch(deleteComment(id))
      }
    
  return (
    <>
    {
        edit ? <>
        <form action="" className='comments_sub_form_comments' onSubmit={handleSubmit} >
        <input type="text" value={cmtBdy} onChange={e=>setCmtBdy(e.target.value)} placeholder='Edit  comment' className='comment_ibox'  />
        <input type="submit" value="Change" className='comment_add_btn_comments' />
      </form>
        </>:<>
        <p className="comment_body">{commentBody}</p>

        </>
    }
    <p className="usercommented">- {userCommented} commented {moment(commentOn).fromNow()}</p>
    {CurrentUser?.result._id === userId && (
      <p className="EditDel_DisplayComment">
       <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
          <i onClick={()=> handleDel(cId)} >Delete</i>
      </p>
    )}  
    </>
  )
}

export default DisplayComments
