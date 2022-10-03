import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import './Front.css'
function FrontPage() {
const navigate=useNavigate();

const navigateCreateevent=()=>{
    navigate('/createevents');
}
   

  return (
    <>
        <div className="container">
         Imagine if
    <div className="snap"> Snapchat </div>
    had events.
    </div>
<div className="container1">
<img src='./birthday.jpg' alt='birthdaycake'/>

</div>

<div className="container2">

Easily host and share events with your friends across any social media.
</div>

<div className="button">
    <button onClick={navigateCreateevent}>
    Create my event
    </button>
</div>


    </>
    

  )
}

export default FrontPage