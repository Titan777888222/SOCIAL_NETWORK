import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
/* import Example from './MyPosts/Post/Like';
 */
const Profile = (props) => {

    

    return (
    <div>
        <ProfileInfo /> 
        
        {/* <Example /> */}       
        <MyPosts
             
            posts = {props.profilePage.posts} 
            newPostText = { props.profilePage.newPostText }
            dispatch = {props.dispatch}  
            
            Example = { props.Example }
            
        />
        {/* <Example /> */}
    </div>

    )

};

export default Profile;