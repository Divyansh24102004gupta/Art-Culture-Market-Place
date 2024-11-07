import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Dialog, DialogTrigger } from './ui/dialog'
import { MoreHorizontal } from "lucide-react";
import { DialogContent } from '@radix-ui/react-dialog';
import { Button } from './ui/button';


const Post = () => {
  return (
    <div className='my-8 w-full mex-w-sm mx-auto'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Avatar>
                    <AvatarImage src="" alt=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>username</h1>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <MoreHorizontal className='cursor-pointer'/>
                </DialogTrigger>
                <DialogContent>
                    <Button variant='ghost' className="cursor-pointer w-fit font-bold">unfollow</Button>
                    <Button variant='ghost' className="cursor-pointer w-fit font-bold">Add to favourite</Button>
                    <Button variant='ghost' className="cursor-pointer w-fit font-bold">Cancel</Button>
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default Post