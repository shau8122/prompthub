
'use client';

import { useState, useEffect } from "react";
import PromptCard from './PromptCard'

const PromptCardList=({data,handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
const Feed=()=> {
  const [searchText, setSearchText] = useState('');
  const [post,setPost]=useState([]);
  useEffect(() => {
    const fetchPosts = async ()=>{
      const response = await fetch('/api/prompt');
      const data =await response.json();
      setPost(data);
    }  
    fetchPosts();
  }, [])
  
  const handleSearchChange=(e)=>{
    e.preventDefault();
    
  }
  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input 
          type="text" 
          className="search_input peer"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
           />
      </form>

      <PromptCardList
        data={post}
        handleTagClick={()=>{}}
      />
    </section>
  )
}
export default Feed;
