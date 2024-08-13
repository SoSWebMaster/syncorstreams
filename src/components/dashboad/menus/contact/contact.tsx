import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
const style = {
   position: "absolute" as "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 800,
   bgcolor: "#2D2D2D",
   border: "1px solid #000",
   boxShadow: 24,
   borderRadius:4,
   pt: 2,
   px: 4,
   pb: 3,
};
const ContactUs = ({ open, setCloseModalState }:any) => {
    const [contactDetails,setContactDetails]=useState({
         name: "",
         email: "",
         subject:"",
         message: "",

    })
   const handleClose = () => {
      setCloseModalState();
   };
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails:any) => ({
        ...prevDetails,
        [name]: value,
    }));
};
const onSubmitData=()=>{
    console.log(contactDetails,"contactDetailscontactDetails")
}

   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
         >
            <Box sx={style}>
               <button
                  className="flex items-center justify-end w-full text-white"
                  onClick={handleClose}
               >
                  <FontAwesomeIcon icon={faXmark}  className="text-[25px]"/>
               </button>
                <p className="text-[28px]">Contact Us</p>
               <Box sx={{marginTop:2}}>
                    <TextField variant="outlined" fullWidth placeholder="Name" 
                        value={contactDetails?.name}
                        name="name"
                        onChange={handleChange}
                      sx={{
                        '& .MuiInputBase-input': {
                            color: 'white', // Input text color
                            '&::placeholder': {
                              color: 'white', // Placeholder color
                            },
                          },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#FB8A2E', // Set your desired border color
                            color:'white'
                          },
                          '&:hover fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                        },
                      }}
                    
                    />
                        <TextField variant="outlined" fullWidth placeholder="Email" className="!mt-6" 
                           value={contactDetails?.email}
                           name="email"
                           onChange={handleChange}
                      sx={{
                        '& .MuiInputBase-input': {
                            color: 'white', // Input text color
                            '&::placeholder': {
                              color: 'white', // Placeholder color
                            },
                          },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#FB8A2E', // Set your desired border color
                            color:'white'
                          },
                          '&:hover fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                        },
                      }}
                    
                    />
                        <TextField variant="outlined" fullWidth placeholder="Subject"  className="!mt-6" 
                           value={contactDetails?.subject}
                           name="subject"
                           onChange={handleChange}
                      sx={{
                        '& .MuiInputBase-input': {
                            color: 'white', // Input text color
                            '&::placeholder': {
                              color: 'white', // Placeholder color
                            },
                          },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#FB8A2E', // Set your desired border color
                            color:'white'
                          },
                          '&:hover fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                        },
                      }}
                    
                    />
                        <TextField variant="outlined" fullWidth placeholder="Comments" className="!mt-6"
                        value={contactDetails?.message}
                        name="message"
                        onChange={handleChange}
                        rows={5}
                        multiline
                      sx={{
                        '& .MuiInputBase-input': {
                            color: 'white', // Input text color
                            '&::placeholder': {
                              color: 'white', // Placeholder color
                            },
                          },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#FB8A2E', // Set your desired border color
                            color:'white'
                          },
                          '&:hover fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#FB8A2E', // Border color when the field is focused
                            color:'white'
                          },
                        },
                      }}
                    
                    />
                    <div className="flex justify-center w-full mt-6 ">
                    <Button className="!bg-[#FB8A2E] !text-white !font-bold !w-40 !h-12" onClick={onSubmitData}>Submit</Button>
                    </div>
                    
               </Box>
            </Box>
         </Modal>
      </div>
   );
};

export default ContactUs;
