import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import "./SignIn.scss";

const SignInPage = ()=> {
    // const [signin, setSignin] = useState(true);
    const [move, setMove] = useState(0);
    // useEffect(()=>{
    console.log(move)
    // }, [signin]) 
    return(
        <div className="log-in">
            <motion.div className="back-box">
                <span   onClick={()=>{setMove(0)}}>Sign Up</span>
                <span style={{marginLeft:'800px'}} onClick={()=>{setMove(520)}}>Log in</span>
            </motion.div>

            <motion.div animate={{x:move, }}  className="front-box">
                
            </motion.div>
    </div>
    )
}

export default SignInPage;