'use client'
import { useState } from "react"
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import {Form} from '@components/Form'
const CreatePrompt=()=> {
  const [submitting,setSubmitting]=useState(false);
  const [post, setPost] = useState({
    prompt:'',
    tag:''
  });
  const {data:session}=useSession();
  const router=useRouter();
  const createPrompt = async (e)=>{
    e.preventDefault();
    setSubmitting(true);
    const options={
      method:'POST',
        body:JSON.stringify({
          prompt:post.prompt,
          userId:session?.user.id,
          tag:post.tag
        })
    }
    try {
      const res = await fetch('/api/prompt/new',options)
      if(res.ok){
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }finally{
      setSubmitting(false);
    }
  }
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}
export default CreatePrompt;