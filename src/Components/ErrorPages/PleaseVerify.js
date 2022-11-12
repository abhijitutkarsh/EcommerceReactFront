import React from "react";
import './ErrorPage.css'
import {useNavigate} from 'react-router-dom'

function PleaseVerify(props){
const navigate =useNavigate();
    if(props.sess.user && props.sess.user.isVerified == true)
    navigate('/')
    else
    return(
        <>
        <div>
        <h1 id="cont">Kindly Verify your Email Id</h1><br/><br/>
        <h3 id="cont">If not got mail, please check your your inbox spam </h3>

        </div>
        </>
    )
}
export default PleaseVerify;