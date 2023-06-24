import { useEffect, useState } from "react";
import {firestore} from './firebase'
import{Link} from 'react-router-dom'
import './index.css'

function Home() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    firestore
    .collection('posts')
    .get()
    .then((snapshot)=>{
     const posts = snapshot.docs.map((doc)=>{
      return {
        id : doc.id,
        ...doc.data()
      }
       
     } )
     
     console.log('posts' ,posts);
     setPosts(posts);
    
    })
  },[])
    return (
      <div className="home">
      <h2>Tech Blog</h2>
      <div id="blog-by">Sonu</div>
      {posts.map((post,index) =>(
        <div className="post" key={`post-${index}`}>
        <Link to ={`/post/${post.id}`}>
        <h3>{post.title}</h3>
        {console.log(post.title)}
        </Link>
        <p>{post.subTitle}</p>
        </div>
    ))}

      </div>
    );
  }
  
  export default Home;
  