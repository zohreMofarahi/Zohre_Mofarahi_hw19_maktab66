import React, { useContext,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './theme';
import Spinner from './spinner/Spinner';

export default function Header(props) {
  const theme=useContext(ThemeContext)
  const [flag,setFlag]=useState('false')
  // localStorage.setItem('flag','true')

  return (
      <>
      <body style={flag?
    {backgroundColor:theme.light.bg,color:theme.light.fg}:
    {backgroundColor:theme.dark.bg,color:theme.dark.fg}
    }>
    <div className="header mx-5 my-3" >
        <h1>Where in the world?</h1>
        <div className='themes' >
            <div className=" my-3  mx-5 " 
            onClick={e => setFlag(!flag)}><FontAwesomeIcon icon={faMoon} />Dark Mode</div>
        </div>
      
    </div>
    </body>
    
     <hr/>
     
     
     <Outlet/>
     </>
     
  )
}
