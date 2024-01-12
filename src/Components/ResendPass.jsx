/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Navbar from "./Navbar/NavBar";
import {useNavigate} from 'react-router-dom'
const ForgotPass = ({ type }) => {
  const [type1, setType1] = useState(type);
  const [signin, setSignIn] = useState(type);
  const navTo=useNavigate()
  const target=useRef()
  const handleClick = () => {
    setType1("sign-in");
    setSignIn(target.current&&target.current.innerText)
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    console.log(type, "type1");
  }, [type1]);
  if(signin==='Sign In'){
    navTo('/home')
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
        {type === "Resend Password" ? (
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
          {type === "Resend Password" ? (
            <FormControl
              variant="standard"
              style={{ marginBottom: "1rem", width: "100%" }}
            >
              <InputLabel htmlFor="standard-adornment-password">
               Enter New Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                    defa
                      aria-label="toggle password visibility"
                      //   onMouseDown={handleMouseDownPassword}
                    ></IconButton>
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
            
          ) : null}
          <FormControl
              variant="standard"
              style={{ marginBottom: "1rem", width: "100%" }}
            >
              <InputLabel htmlFor="standard-adornment-password">
              Re-Enter New Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      //   onMouseDown={handleMouseDownPassword}
                    ></IconButton>
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
            <Typography>{type1==='sign-in'?'Your Password has been reset':null}</Typography>
        </Box>
      </Box>

      <Box>
        <button className="auth-btn2" onClick={handleClick} ref={target}>
          {type1 === "Resend Password" ? "Reset My Password" : "Sign In"}
        </button>
      </Box>
    </Box>
  );
};

export default ForgotPass;
