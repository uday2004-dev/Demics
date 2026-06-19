import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
    const navigate=useNavigate()
  return (
    <div>

        <button onClick={()=>navigate("/sideBar/blogs/createBlogs")}>click</button>
    </div>
  )
}

export default Blogs