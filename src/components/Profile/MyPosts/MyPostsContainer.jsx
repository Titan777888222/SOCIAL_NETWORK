import React from "react";
import { connect } from "react-redux";
import {  addPostActionCreator,  updateNewPostTextActionCreator,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
// import store from '../../../redux/redux-store';
/* import { useState } from 'react'; */
/* import { posts } from "./../../../index" */



const mapStateToProps = ( state ) => {   //Каждый раз, как у нас в state изменения, запускается mapStateToProps
  return {

    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    
        updateNewPostText: (text) => { 
          let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => { 
          dispatch(addPostActionCreator()); 
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
