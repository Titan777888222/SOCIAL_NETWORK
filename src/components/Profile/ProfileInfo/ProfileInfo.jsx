import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            
            <div>
                <img /* className = {s.bigImage } */src = 'https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=1200&h=310'/>
            </div>

            <div className = {s.descriptionBlock}>
                avatar + description
            </div>
        </div>

    )

};

export default ProfileInfo;