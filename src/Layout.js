import { Outlet, Link } from "react-router-dom";
import React from "react";
import './style.css'

import pic1 from './images/Blue marble.png'

const Layout = () => {
  return (
    <>
<div className="navBar">
    <p><Link to='/'><img src={pic1}></img></Link></p>
</div>
      <Outlet />
    </>
  )
};

export default Layout;