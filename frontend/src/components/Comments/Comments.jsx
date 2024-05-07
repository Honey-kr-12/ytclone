import React, { useState } from 'react'
import './Comments.css'
import DisplayComments from './DisplayComments'
import {useDispatch, useSelector} from 'react-redux'
import { postComment } from '../../actions/comments'

const Comments = ({videoId}) => {
  const [commentText, setCommentText] = useState("");
  const CurrentUser = useSelector(state => state?.currentUserReducer);

  const commentList = useSelector(s=>s.commentReducer)

//   const commentList = [
//     {
//       _id:"1",
//     commentBody:"hello",
//     userCommented:"abc"
//   },
//     {
//       _id:"2",
//     commentBody:"hi",
//     userCommented:"def"
//   },
//     {
//       _id:"3",
//     commentBody:"hola",
//     userCommented:"ghi"
//   },
// ]
const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (CurrentUser) {
      if (!commentText) {
        alert("Plz Type your comment ! ");
      } else {
        dispatch(
          postComment({
            videoId: videoId,
            userId: CurrentUser?.result._id,
            commentBody: commentText,
            userCommented: CurrentUser?.result.name,
          })
        );
        setCommentText("");
      }
    }else{
      alert("Plz login to post your commnet !")
    }
  };
  return (
    <>
      <form action="" className='comments_sub_form_comments' onSubmit={handleOnSubmit} >
        <input type="text" value={commentText} onChange={e=>setCommentText(e.target.value)} placeholder='add comment' className='comment_ibox'  />
        <input type="submit" value="add" className='comment_add_btn_comments' />
      </form>
      <div className="display_comment_container">
        {
          commentList?.data?.filter(q=>videoId === q?.videoId).reverse().map((m) => {
            return (
              <DisplayComments cId={m._id} userId={m.userId} commentOn={m.commentOn} userCommented={m.userCommented} commentBody={m.commentBody} />
            )
          })
        }
      </div>
    </>
  )
}

export default Comments
    