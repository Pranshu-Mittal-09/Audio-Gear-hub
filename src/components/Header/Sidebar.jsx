import React from "react";
import "./Sidebar.scss";
import { VscChromeClose } from "react-icons/vsc";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <div className="other">
      <div className="opac-layer"></div>
      <div className="mainside" sidebar={active}>
        <VscChromeClose onClick={closeSidebar} />
        <ul className="sidee">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
