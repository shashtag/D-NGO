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
                <button  onClick={()=>{setMove(0)}}>Sign Up</button>
                <button style={{marginLeft:'800px'}} onClick={()=>{setMove(520)}}>Log in</button>
            </motion.div>

            <motion.div animate={{x:move }}  className="front-box">
                <div style={move?{display:'none'}:{display:'inline'}}>
                    <h1 >Sign In</h1>
                    <input type='text' placeholder='email'/><br />
                    <input type='text' placeholder='password'/>
                    <button style={{marginLeft:'200px', marginTop:'20px'}}> Submit</button>
                </div>

                <div style={move?{display:'inline'}:{display:'none'}}>
                    <h1 >Sign Up</h1>
                    <input type='text' placeholder='email'/><br />
                    <input type='text' placeholder='password'/> <br />
                    <input type='text' placeholder='confirm password'/>
                    <button style={{marginLeft:'200px', marginTop:'20px'}}> Submit</button>
                </div>
                
            </motion.div>
    </div>
    )
}

export default SignInPage;