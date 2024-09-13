 import React, { useEffect } from "react";
import { useState } from "react";
import AdminSidebar from "../Admin/AdminSidebar";
import AdminHome from "../Admin/AdminHome";
import "../css/admin.css";
import { useLocation } from "react-router-dom";
import AdminProjects from "../components/AdminProjects";
import AdminReviews from "../components/AdminReviews";

export default function Admin() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <AdminSidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      {/* <AdminHome /> */}

      {tab === "projects" && <AdminProjects />}

      {/* posts */}
      {tab === "reviews" && <AdminReviews />}
      {/* users */}
      {tab === "users" && <DashUsers />}
    </div>
  );
}
