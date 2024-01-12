import Grid from "@mui/material/Grid";
import AuthBanner from "../assets/Auth/group-afro-americans-working-together (1).png";
import Box from "@mui/material/Box";
import { useState } from "react";
import SignIn from "./SignIn";
// import SignUp from "./SignUp";
const AuthMainPage = () => {
  const [pathname, setPathname] = useState("sign-in");
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <img src={AuthBanner} alt="" className="auth-banner" />
        </Grid>
        <Grid item xs={12} md={4} >
          <Box style={{borderBottom:'1px solid gray',width:'14rem',margin:'0 auto'}}>
          <Box className='flex-box' flexDirection={'row'} gap={2} m={0}>
            <button
              className={`auth-btn1 ${
                pathname === "sign-in" ? "active" : null
              }`}
              onClick={() => setPathname("sign-in")}
            >
              Join PANDA
            </button>
            or
            <button
              className={`auth-btn1 ${
                pathname === "sign-up" ? "active" : null
              }`}
              onClick={() => setPathname("sign-up")}
            >
              Sign in
            </button>
          </Box>
          </Box>
          <Box mt={4}>{pathname === "sign-in" ? <SignIn type='sign-in'/> : <SignIn type='sign-up'/>}</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthMainPage;
