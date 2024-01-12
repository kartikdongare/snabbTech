/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ResendPass from '../Components/ResendPass'
const ForgotPass = ({ type }) => {
  const [type1,setType1]=useState(type)
  const [resend,setResend]=useState(null)
 const target=useRef()
const handleClick=()=>{
  setType1('resend')
  console.log(target.current&&target.current.innerText,'target')
  setResend(target.current&&target.current.innerText)
}
useEffect(()=>{
console.log(type1,'type1')
},[type1])
if(resend==='Resend'){
  return <ResendPass type='Resend Password'/>
}
  return (
    <Box
      textAlign={"center"}
      sx={{ marginBottom: { xs: "2rem" } }}
      className="flex-box"
      gap={4}
    >
      <Box
        style={{
          border: "2px solid gray",
          //   width: "80%",
          margin: "auto",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
        }}
        sx={{ width: { xs: "90%", md: "80%" } }}
      >
        <Typography variant="h6" mt={2}>
          *
        </Typography>
        {type === "Forgot Password" ? (
          <>
            <Typography variant="h6" mt={4}>
             {type}
            </Typography>
          </>
        ) : null}

        <Box
          sx={{
            width: { xs: "80%", md: "70%" },
            margin: { xs: "2rem auto", md: "3rem auto" },
          }}
          gap={3}
        >
          <TextField
            id="standard-helperText"
            label="Email"
            defaultValue="kd@gmail.com"
            helperText={
              type1 === "Forgot Password"
                ? "Please enter your login email address to receive your password reset link."
                : 'Your password reset link has been sent to your email address.Please check your email and click on the link to reset your password.'
            }
            variant="standard"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </Box>
      </Box>
      {type1==='resend'?<Box textAlign={'center'}>
        <Typography>Didn't get the password reset link?</Typography>
      </Box>:null}
      
      <Box>
        <button className="auth-btn2" onClick={handleClick} ref={target}>
          {type1 === "Forgot Password" ? "Get the link" : "Resend"}
        </button>
      </Box>
    </Box>
  );
};

export default ForgotPass;
