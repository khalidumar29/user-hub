import React from "react";
import { Link } from "react-router-dom";
const Header = ({ setStatus }) => {
  return (
    <nav className=' lg:mx-[10%] md:mx-[5%]'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <Link to={""} className='btn btn-ghost normal-case text-xl'>
            User Hub
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to={""}>Message</Link>
            </li>
            <li tabIndex='0'>
              <Link to={""}>Profile</Link>
            </li>
            <li>
              <Link
                onClick={() => setStatus(true)}
                className='btn btn-outline capitalize btn-primary'
                to={""}
              >
                get user
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
