'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/Profile'

const ProfilePage = () => {
  const router=useRouter();
  const {data:session} = useSession();
  const [post,setPost] =useState([])
  useEffect(() => {
    const fetchPosts = async ()=>{
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data =await response.json();
      setPost(data);
    }  
    if(session?.user.id) fetchPosts();
  }, [])
  const handleEdit= (post)=>{
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete= async(postToDelete)=>{
    const hasComfirmed = confirm("Are you sure you want to delete this prompt?");
    if(hasComfirmed){
      try {
        await fetch(`/api/prompt/${postToDelete._id.toString()}`,{
          method:'DELETE',
        });
        const filteredPost =post.filter((p)=>p._id !== postToDelete._id)
        setPost(filteredPost);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return ( 
    <Profile
      name='My'
      desc="Welcome to your pesonalized profile page"
      data={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
   );
}
 
export default ProfilePage;