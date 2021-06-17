import React from 'react';
import s from "./../Dialogs.module.css";


const Avatars = (props) => {
    console.log(props);
    return (      
                       
          <div className = {s.avatars}>
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJYN5tb6v0YM5UUbESbtkCMuXjm269Q3Q3g&usqp=CAU"></img>                          
         </div>
    

    )

};

export default Avatars;