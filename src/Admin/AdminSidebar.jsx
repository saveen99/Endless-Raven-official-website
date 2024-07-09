import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/admin/adminSlice.js";

function AdminSidebar({ openSidebarToggle, OpenSidebar }) {

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/member/signout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        console.log(data);
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">ENDLESS-RAVEN</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        {/* <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li> */}
        <li className="sidebar-list-item">
          <a href="/admin-panel?tab=projects">
            <BsFillArchiveFill className="icon" /> Projects
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/admin-panel?tab=reviews">
            <BsFillGrid3X3GapFill className="icon" /> Customer Reviews
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/admin-panel?tab=members">
            <BsPeopleFill className="icon" /> Members
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/admin-panel?tab=customer">
            <BsListCheck className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item" onClick={handleSignOut}>
            Sign Out
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
