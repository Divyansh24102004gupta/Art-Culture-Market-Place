import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const sidebarItems = [
    { icon: "", text: "Home" },
    { icon: "", text: "Search" },
    { icon: "", text: "Explore" },
    { icon: "", text: "Messages" },
    { icon: "", text: "Notifications" },
    { icon: "", text: "Create" },
    {
        icon: (
            <Avatar className='w-6 h-6'>
                <AvatarImage src={""} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        ), 
        text: "Profile"
    },
    { icon: "", text: "Logout" },
] 

const LeftSidebar = () => {

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/v1/user/logout',{withCredentials:true});
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  const sidebarHandler = (textType) => {
    if(textType === "Logout"){
      logoutHandler();
    }
    if(textType === "Logout"){
      logoutHandler();
    }
     
  }
  return (
    <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen'>
      <div className='flex flex-col'>
        <h1 className='my-8 pl-3 font-bold text-xl'>LOGO</h1>
        <div>
        {
          sidebarItems.map((items,index) => {
            return(
              <div onClick={() => sidebarHandler(items.text)} key = {index} className='flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3'>
                {items.icon}
                <span>{items.text}</span>
              </div>
            )
          })
        }
        </div>
    </div>
  </div>
  )
}

export default LeftSidebar