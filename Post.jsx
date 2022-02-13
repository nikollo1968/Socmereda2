import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.item}>
        <img src='https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' alt='ava'/>
        { props.message }
        <div>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    </div>



  );
}

export default Post;