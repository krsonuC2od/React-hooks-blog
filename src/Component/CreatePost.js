// import React ,{useState} from 'react'
import {firestore} from './firebase'
import {useFormInput} from './hooks'
function CreatePost() {
  const title =useFormInput();
  const subTitle =useFormInput();
  const content  = useFormInput();

  function CreatePost (e){
    e.preventDefault();
    console.log(title);
    console.log(subTitle);
    console.log(content);
    firestore.collection('posts').add({
      title:title.value,
      subTitle:subTitle.value,
      content:content.value,
      createdAt: new Date(),
      
    }
   
    )
    
  }
    return (
      <div className="create-post">
      <h1 className="post-heading">Create Post</h1>
      <form onSubmit={CreatePost}>
      <div className="post-field">
      <label htmlFor="">Title</label><br />
      <input type="text"{...title}/>
      </div>
      <div className="post-field">
      <label htmlFor="">Sub Title</label><br />
      <input type="text" {...subTitle}/>
      </div>

      <div className="post-field">
      <label htmlFor="">Content</label><br />
      <textarea name="" id="" cols="30" rows="10"{...content}></textarea>
      </div>
      
       <button className="create-post-btn" type="submit">Create Post</button>
      </form>
      
      </div>
    );
  }
  
  export default CreatePost;
  