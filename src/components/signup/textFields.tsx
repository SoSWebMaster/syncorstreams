import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React from "react";
import { Button } from "@mui/material";

const SignUpTextFieldsComponent = () => {
   const [showPassword, setShowPassword] = React.useState(false);
   const [showPassword2, setShowPassword2] = React.useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);
   const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
   return (
      <>
         <div className="mt-10 text-center">
            <form>
                <OutlinedInput
                  placeholder="Name"
                  className="!bg-white  !rounded-lg 2xl:!w-[35%] xl:w-[48%] lg:w-[52%]"
                  sx={{ height: 70 }}
               />
               <br />
               <OutlinedInput
                  placeholder="Enter Email"
                  className="!bg-white mt-5  !rounded-lg 2xl:!w-[35%] xl:w-[48%] lg:w-[52%]"
                  sx={{ height: 70 }}
               />
               <br />
               <OutlinedInput
                  className="!bg-white !rounded-lg 2xl:!w-[35%] xl:w-[48%] lg:w-[52%] mt-5 h-[70px]"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           onClick={handleClickShowPassword}
                           edge="end"
                        >
                           {showPassword ?  <Visibility />: <VisibilityOff /> }
                        </IconButton>
                     </InputAdornment>
                  }
                  label="Password"
               />
                <br />
               <OutlinedInput
                  className="!bg-white !rounded-lg 2xl:!w-[35%] xl:w-[48%] lg:w-[52%] mt-5 h-[70px]"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm Password"
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           onClick={handleClickShowPassword2}
                           edge="end"
                        >
                           {showPassword2 ?  <Visibility />: <VisibilityOff /> }
                        </IconButton>
                     </InputAdornment>
                  }
                  label="Password"
               />
                <br/>
               <Button className="!bg-[#0714BD] !text-white !rounded-lg 2xl:!w-[35%] xl:w-[48%] lg:w-[52%] !mt-5 h-[55px]" variant="outlined">Create Acoount</Button>
            </form>
            <p className="mt-3">By continuing you indicate that you read and agreed to the Terms of Use</p>
         </div>
      </>
   );
};

export default SignUpTextFieldsComponent;
