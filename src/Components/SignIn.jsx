/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import ForgotPass from "./ForgotPass";
import {useNavigate} from 'react-router-dom'
const SignIn = ({type}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [forgotPass, setForgotPass] = React.useState(null);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [signin,setSignIn]=useState()
  const target=useRef();
  const navTo=useNavigate()
  if(signin==='Sign In'){
    navTo('/home')
  }
  if(forgotPass==='forgot-pass'){
    return <ForgotPass type='Forgot Password'/>
  }else 
    return (
    <Box textAlign={"center"} sx={{marginBottom:{xs:'2rem'}}} className='flex-box'>
      <Box
        style={{
          border: "2px solid gray",
        //   width: "80%",
          margin: "auto",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
        }}
        sx={{width:{xs:'90%',md:'80%'}}}
      ><Typography variant="h6" mt={2}>*</Typography>
        {type==='sign-in'?<>
        <Typography variant="h6" mt={4}>Create your free account</Typography>
        <Typography variant="h6" mt={2}>
          Take less than <span>5 minutes</span>...
        </Typography></>:<Typography variant="h6" mt={2}>
          Sign In
        </Typography>}
        

        <Box sx={{width:{xs:'80%',md:'64%'},margin:{xs:'2rem auto',md:'3rem auto'}}}  gap={3}>
          <TextField
            id="standard-helperText"
            label="Email"
            defaultValue="kd@gmail.com"
            helperText={type==='sign-in'?"This email already exist. Sign In":'This email address is valid'}
            variant="standard"
            style={{width:'100%',marginBottom:'1rem'}}
          />
          {type==='sign-in'?
          <FormControl variant="standard" style={{marginBottom:'1rem',width:'100%'}}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    //   onMouseDown={handleMouseDownPassword}
                  >
                  </IconButton>
                  <span
                    onClick={handleClickShowPassword}
                    style={{
                      fontSize: "small",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <ins>SHOW</ins> : <ins>HIDE</ins>}
                  </span>
                </InputAdornment>
              }
            />
          </FormControl>
          :null
}
          <br/>
          <FormControl variant="standard" style={{marginBottom:'1rem',width:'100%'}}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    //   onMouseDown={handleMouseDownPassword}
                  >
                  </IconButton>
                  <span
                    onClick={handleClickShowPassword}
                    style={{
                      fontSize: "small",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <ins>SHOW</ins> : <ins>HIDE</ins>}
                  </span>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography fontWeight={'bold'} textAlign={'start'} onClick={()=>setForgotPass('forgot-pass')}>
            <ins>{type==='sign-in'?null:'Forgot password'}</ins>
          
          </Typography>
         
        </Box>
      </Box>
      {type==='sign-in'?
      <Box  sx={{width:{xs:'80%',md:'56%',sm:'71%'},margin:{md:'auto',xs:'auto',sm:'auto'}}} >
        <FormGroup textAlign={'center'} display={'flex'} >
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="I'm an Expert"
            // style={{border:'1px solid red'}}
          />
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="I'm an organization in Africa"
          />
        </FormGroup>
      </Box>:null
      }
      <Box>
        <button className="auth-btn2" ref={target} onClick={()=>setSignIn(target.current&&target.current.innerText)}>{type==='sign-in'?'Join PANDA':'Sign In'}</button>
      </Box>
      {type==='sign-in'?
      <Box color={'gray'}>
        <Typography variant="p">
            By clicking on "Create an account",you agree to our
        </Typography>
        <br/>
        <Typography variant="p">
            <ins>terms of use and privacy policy.</ins>
        </Typography>
      </Box>
      :null
}
    </Box>
    
  );
};

export default SignIn;
