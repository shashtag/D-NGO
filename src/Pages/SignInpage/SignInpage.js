import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SignIn.scss";
import { Link } from "react-router-dom";

const SignInPage = () => {
  // const [signin, setSignin] = useState(true);
  const [move, setMove] = useState(0);
  // useEffect(()=>{
  console.log(move);
  // }, [signin])
  return (
    <div className='log-in'>
      <motion.div className='back-box'>
        <button
          onClick={() => {
            setMove(0);
          }}>
          Sign Up
        </button>
        <button
          style={{ marginLeft: "800px" }}
          onClick={() => {
            setMove(520);
          }}>
          Log in
        </button>
      </motion.div>

      <motion.div animate={{ x: move }} className='front-box'>
        <div style={move ? { display: "none" } : { display: "inline" }}>
          <h1>Sign In</h1>
          <input type='text' placeholder='email' />
          <br />
          <input type='text' placeholder='password' />
          <Link
            to='/hospital'
            style={{ marginLeft: "200px", marginTop: "20px" }}>
            {" "}
            Submit
          </Link>
        </div>

        <div style={move ? { display: "inline" } : { display: "none" }}>
          <h1>Sign Up</h1>
          <input type='text' placeholder='email' />
          <br />
          <input type='text' placeholder='password' /> <br />
          <input type='text' placeholder='confirm password' />
          <Link
            to='/hospital'
            style={{ marginLeft: "200px", marginTop: "20px" }}>
            {" "}
            Submit
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
