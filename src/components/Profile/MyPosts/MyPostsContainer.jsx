import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

// import store from '../../../redux/redux-store';
/* import { useState } from 'react'; */
/* import { posts } from "./../../../index" */



const MyPostsContainer = ( /* props */ ) => {  

  
    // let state = props.store.getState();
    // let addPost = () => {    
    //   //props.addPost()
    //   props.store.dispatch( addPostActionCreator() );
     
    //   /* props.Example(); */ 
    // };

    // let onPostChange = ( text ) => {
      
    //   let action = updateNewPostTextActionCreator( text );
    //   props.store.dispatch( action );
    // }

    return (

      <StoreContext.Consumer> 
        {
          ( store ) => {
            // props берем сверху, но он должен быть пустой, поэтому их удаляем, а store здесь получаем из Context 
              let state = /* props. */store.getState();

              let addPost = () => {    
                /* props. */store.dispatch( addPostActionCreator() ); 
              };
              let onPostChange = ( text ) => {
                
                let action = updateNewPostTextActionCreator( text );
                /* props. */store.dispatch( action );
              }
            
                
                  return (
                  
                      < MyPosts     
                  
                      updateNewPostText = { onPostChange } 
                      addPost = { addPost } 
                      posts = { state.profilePage.posts }
                      newPostText = { state.profilePage.newPostText } 
                      
                      />
                  )
                }
        }

      </StoreContext.Consumer>      

      

             
    );
}

export default MyPostsContainer;