import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'
import { useTranslation } from 'react-i18next';

const   WHLVideoList = ({ page, CurrentUser, videoList }) => {
  const { t } = useTranslation();
  return (
    <>
     { CurrentUser ?(<>
     {
              videoList?.data?.filter(q=>q?.Viewer === CurrentUser).reverse().map(m=>{
                return(
                    <>
                    <ShowVideoList videoId={m?.videoId} key={m?._id}/>
                    </>
    
                )
            })
     }
      </>) :(<> 
      <h2 style={{color:"white"}}>{t('PlzLTWY')} {page} </h2>
      </>)

     }
    </>
  )
}
  
export default WHLVideoList
