import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import {firestore} from './firebase'
import './index.css'

function PostDetail() {
  const [post ,setPosts] =useState({});
  const {postId}=useParams();

  useEffect(()=>{
    firestore
    .collection('posts')
    .doc(postId)
    .get()
    .then((snapshot)=>{
     console.log(snapshot.data())
     setPosts(snapshot.data())
    })
  })
    return (
      <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;
  