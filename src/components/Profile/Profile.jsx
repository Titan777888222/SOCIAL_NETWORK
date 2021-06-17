import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
/* import Example from './MyPosts/Post/Like';
 */// import s from "./Profile.module.css";
// import StoreContext from '../../StoreContext';
// import MyPosts from './MyPosts/MyPosts';

const Profile = (/* props */) => {

    debugger;

    return (
    <div>
        
        <ProfileInfo /> 
        
               
        <MyPostsContainer
            // store = { props.store }
            // posts = {props.profilePage.posts} 
            // newPostText = { props.profilePage.newPostText }
            // dispatch = {props.dispatch}  
            
            // Example = { props.Example }
            
        />
        
       
    </div>

    )

};

export default Profile;