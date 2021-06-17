import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
/* import { useState } from 'react'; */
/* import { posts } from "./../../../index" */



const MyPosts = (props) => {
  
      
      let postsElements = props.posts.map( p => {
        return (
          <Post 
              message = {p.message} 
              like = {p.like} 
              newPostText = { p.newPostText } 
              updateNewPostText = { p.updateNewPostText }
              Example = { p.Example } 
          />
          
        )
      }
    );

    let newPostElement = React.createRef();
    

    let onAddPost = () => {    
      props.addPost();
      // props.dispatch( addPostActionCreator() );
           
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text)// - было так
      // let action = updateNewPostTextActionCreator( text );
      // props.dispatch( action );
    }

    return (
        
        <div className = {s.postsBlock}>
              <h3>My posts</h3>
              <div>
                <div>
                    <textarea onChange = { onPostChange } 
                              ref = { newPostElement } 
                              value = { props.newPostText }>
                    </textarea>
                </div>
                <div>
                    <button onClick = { onAddPost } >Add post</button>
                </div>
                    <button onClick = { onAddPost }>Remove post</button>
              </div>
              <div className = {s.posts}>
                
                { postsElements }

                 
              </div>          
             
        </div>
    

    )

};

export default MyPosts;