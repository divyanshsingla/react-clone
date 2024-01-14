import React, {useState} from 'react'
import '../Content/Content.css'
import { ClassNames } from '@emotion/react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Content = () => {
    const[topic,setTopic]= useState({
        heading:"This way is wrong about UI design",
        description:"Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem ",
        linkedin:"www.linkidin.com",
        twitter: "www.twitter.com",
        medium:"www.medium.com",
        img:"https://img.freepik.com/premium-photo/general-view-home-workplace-pro-gamer-with-professional-gaming-setup-desktop-modern-powerf_396607-28696.jpg",
       
    })
    const data = Object.keys(topic);
  return (
    <div>
    <h3 className='blogPosts'>Blog Posts</h3>
      <div >
      <div>
        {
            data.map((key)=>{
                if(key == "heading"){
                    return <h4 className='firstHeading'>{topic[key]}</h4>
                }
            })
        }
        </div>
        <div>
        {
            data.map((key)=>{
                if(key == "description"){
                    <h6 className="">{topic[key]}</h6>
                }
            })
        }
        </div>
       
        <div className="buttonClass">
       {
        data.map((key)=>{
            if(key == "linkedin"||key == "twitter"||key == "medium"){
                    return (
                        <div className='button'>
                            <button  className={key}><a href={topic[key]} style={{textDecoration: 'none', color:'white'}}>{key}</a></button>
                        
                    </div>)
                }
            })
       }
        </div>
        <div>{
            data.map((key)=>{
                if(key == "img"){
                    return <img src={topic[key]} className='image'></img>
                }
            })
        }
        </div>
            
      </div>
    </div>
  )
}

export default Content
