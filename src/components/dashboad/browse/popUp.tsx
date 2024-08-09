import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PlayListCard from "../playlist/playListCards";
import ScrollMenuComponent from "../../musicSection";
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

const PlaylistPopUp = ({ open, setOpenModalState, setCloseModalState }) => {
   const handleOpen = () => {
      if (setOpenModalState) {
         setOpenModalState();
      }
   };
   const handleClose = () => {
      setCloseModalState();
   };
   console.log("Hello WOrld");
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
              
               <ScrollMenuComponent>
                    <PlayListCard/>
               </ScrollMenuComponent>
            </Box>
         </Modal>
      </div>
   );
};

export default PlaylistPopUp;
