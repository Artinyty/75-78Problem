import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';



let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div className={styles.mainDiv}>
    <div>
      {pages.map(p => {
        return <span key={p} className={props.currentPage === p ? styles.selectedPage : styles.Page}
          onClick={() => { props.onPageChanged(p) }} >{p}</span>
      })}
    </div>
    {props.users.map(u => <div key={u.id}>
      <span>
        <div className={styles.divPhoto}>
          <NavLink to={"/profile/" + u.id}>
            <img className={styles.userPhoto}
              src={u.photos.small != null ? u.photos.small : userPhoto}
              alt={'Avatar'} /></NavLink>
        </div>
        <div className={styles.divPhoto}>
          {u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.btn_following} onClick={() => {
              props.unfollow(u.id);
            }}> Unfollow </button>

            : <button disabled={props.togglefollowingInProgress} className={styles.btn_following} onClick={() => {
              props.follow(u.id);
            }}>Follow </button>
          }


        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </span>
      </span>
    </div >)
    }
  </div >
}

export default Users;