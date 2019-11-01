import React from "react";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://klike.net/uploads/posts/2019-01/1547368008_14.jpg"
          alt=""
        />
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
}

export default Profile;
