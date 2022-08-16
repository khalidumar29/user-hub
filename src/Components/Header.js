import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div class='navbar bg-base-100'>
      <div class='flex-1'>
        <Link to={""} class='btn btn-ghost normal-case text-xl'>
          User Hub
        </Link>
      </div>
      <div class='flex-none'>
        <ul class='menu menu-horizontal p-0'>
          <li>
            <Link to={""}>Message</Link>
          </li>
          <li tabindex='0'>
            <Link to={""}>Profile</Link>
          </li>
          <li>
            <Link className='btn btn-outline capitalize btn-primary' to={""}>
              get user
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
