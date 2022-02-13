import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
          <div>
              <img className={s.profImg} src="https://klike.net/uploads/posts/2019-07/1562069659_a1.jpg" alt=" see " />
          </div>
          <div className={s.descriptionBlok}>
              ava + description
          </div>
            
        </div>
      

    );
  }
  
  export default ProfileInfo; 