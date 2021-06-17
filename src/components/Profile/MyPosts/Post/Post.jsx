import React from 'react';
import s from "./Post.module.css";


const Post = (props) => {
    console.log(props);
    return (      
                       
          <div className = {s.item}>
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU"></img>
                {props.message}
              <div>
                <span>Like <img src = "https://t4.ftcdn.net/jpg/02/94/07/93/360_F_294079312_fCE9Mz9LiHWJRPdz6wtnXXESCPs61egX.jpg"></img>FFF { props.like } { props.Example }</span>
              </div>
          </div>             
    

    )

};

export default Post;