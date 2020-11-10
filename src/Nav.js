import React, {useState, useEffect} from 'react'
import "./Nav.css"
import image from "./image.png"
import "./Banner.css"


 const Nav = () => {
     const [show, handleShow] = useState(false)
     useEffect(() => {
         window.addEventListener("scroll", ()=>{
             if(window.scrollY>100){
                 handleShow(true)
             }
             else{
                 handleShow(false)
             }
         })
         return ()=>{
             window.removeEventListener("scroll")
         }
        }, [])
    return (
        <div className = {`nav ${show && "nav_black"}`}>
            <img className = "nav_logo" src={image}/>
            <button className = "banner_button nav_name">Made With &#10084;&#65039; &#169; G.S.</button>
            
        </div>
    )
}

export default Nav
