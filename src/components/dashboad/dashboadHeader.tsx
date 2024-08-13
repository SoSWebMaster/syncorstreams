import Logo from '/static/images/SoS_Logo.png'
import User from '/static/images/ei_user.png'
import { useAppSelector } from '../../store'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch } from '../../store';
import { updateSideBar, updateSinglePage } from '../../store/music-store';
import ContactUs from './menus/contact/contact';
const DashboadHeader = () => {
    const { user } = useAppSelector((state) => state.auth)
    const [openModal, setOpenModal] = React.useState(false    );
    const dispatch=useAppDispatch(); 
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name:string) => {
        setAnchorEl(null);
        dispatch(updateSideBar(name));
    };
    const Logout=()=>{
        setAnchorEl(null);
        dispatch(updateSinglePage(''))
        dispatch({ type: 'LOGOUT' });
    }
    const setCloseModalState=()=>{
        setAnchorEl(null);
        setOpenModal(prev=>!prev);
     }
    return (
        <>
            <div className='flex !items-center !justify-between 2xl:px-52 xl:px-36 lg:px-28 py-10'>
                <img src={Logo} alt="logo" className='w-[290px] h-[42px]' />
                <div className='flex justify-end w-full ' >
                    <p className='flex items-center justify-center '> <span> <img src={User} /> </span> Wellcome {user?.name}</p>
                       {/* @ts-ignore  */}
                        <ExpandMoreIcon  onClick={handleClick} className='mt-3 ml-2 cursor-pointer '/>
                  
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={()=>handleClose('profile')}>Profile</MenuItem>
                        <MenuItem onClick={()=>handleClose('billing')}>Billing</MenuItem>
                        <MenuItem onClick={()=>handleClose('myplan')}>My Plan</MenuItem>
                        <MenuItem onClick={setCloseModalState}>Contact Us</MenuItem>
                        
                        <MenuItem onClick={Logout}>Logout</MenuItem>
                    </Menu>
                </div>


                <div>

                </div>

            </div>
            {openModal && <ContactUs  open={openModal} setCloseModalState={setCloseModalState} />}   
        </>
    )
}

export default DashboadHeader;