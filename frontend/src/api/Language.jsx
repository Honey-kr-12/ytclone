import React from 'react'
import { useState  , useRef}  from 'react';
import './Dropdown.css'
import i18next from 'i18next'
import imge from './globe.jpg'


const Language = () => {
  const [open, setOpen]=useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  window.addEventListener('click', (e)=> {
      if(e.target !== menuRef.current &&  e.target !== imgRef.current) {
          setOpen(false);
      } })
    const languages = [
      {
        code: 'en',
        name: 'English',
        country_code: 'gb',
      },
        {
          code: 'fr',
          name: 'French',
          country_code: 'fr',
        },
        {
          code: 'hi',
          name: 'Hindi',
          country_code: 'in',
        },
        {
          code: 'tm',
          name: 'Tamil',
          country_code: 'in',
        },
      ]
  return (
<div className="main_div">
    <img
    ref={imgRef}
    onClick={()=> setOpen(!open)}
    src={imge}
    alt='image'
    className="imgg" >
    </img >
    {
        open &&
   
        <div  ref={menuRef}
        className="list">
            <ul  >
                {
                    languages.map(({name, code}) =>(
                        <li onClick={() => i18next.changeLanguage(code)} className="list_item" Key={languages}>{name}
                        </li>

                    ))
                    
                }
                
            </ul>

            </div>
    }</div>
  )
}

export default Language
