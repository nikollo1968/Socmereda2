import React from 'react';
import { NavLink } from 'react-router-dom';
import s  from './Navbar.module.css';



const Navbar = () => {
    return (
      <div className = {s.navbar}>
        <nav >
          <div className = {s.item}>
            <NavLink to="/profile/" activeClassName={s.active}>Profile</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/dialogs/' activeClassName= {s.active}>Messages</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/news' activeClassName= {s.active}>News</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/music' activeClassName= {s.active}>Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/setting' activeClassName= {s.active}>Settings</NavLink>
          </div>
        </nav>
        <div className={s.friends}>
          <h3>Friends</h3>
          <div className={s.boxFriends}>
            <div>
                <div className={s.point}></div>
                <h4>Sasha</h4>
                {/* <Friend/> */}
            </div>
            <div>
                <div className={s.point}></div>
                {/* <Friend/> */}
            </div>
            <div>
                <div className={s.point}></div>
                {/* <Friend/> */}
            </div>
          </div>
        </div>
      </div>  
    );
  }
  
  export default Navbar;