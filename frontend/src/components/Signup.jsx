import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [input, setInput] = useState({
    username:"",
    email:"",
    password:""
  })

  const [loading,setLoading ] = useState(false);

  const changeEventHandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }

  const signupHandler = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(' http://localhost:8000/api/v1/user/register',input,{
        headers:{
          'content-type':'application/json'
        },
        withCredentials:true
      });
      if(res.data.success){
        toast.success(res.data.message);
        setInput({
          username:"",
          email:"",
          password:""
        })
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex items-center w-screen h-screen  justify-center'>
        <form  onSubmit = {signupHandler} className='shadow-lg flex flex-col gap-5 p-8'>
            <div className='my-4'>
                <h1 className='text-center font-bold text-xl'>Logo</h1>
                <p className='text-sm text-center'>signup to see photos and videos</p>
            </div>
            <div>
                <span>Username</span>
                <Input type="text" name="username" value={input.username} onChange={changeEventHandler} className = 'focus-visible:ring-transparent my-2'/>
            </div>
            <div>
                <span>Email</span>
                <Input type="text" name="email" value={input.email} onChange={changeEventHandler} className = 'focus-visible:ring-transparent my-2'/>
            </div>
            <div>
                <span>Password</span>
                <Input type="text" name="password" value={input.password} onChange={changeEventHandler} className = 'focus-visible:ring-transparent my-2'/>
            </div>
            {
              loading ? (
                <Button>
                  <Loader2 className = 'mr-2 h-4 w-4 animate-spin'/>
                  Pease wait
                </Button>
              ):(
                <Button type='submit' >Signup</Button>
              )
            }
            <span className='text-center '>Already have an account?<Link className='text-blue-600' to={'/login'}>Login</Link></span>
        </form>
    </div>
  )
}

export default Signup