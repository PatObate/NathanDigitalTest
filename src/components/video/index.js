import React from "react";

import { SidebarClose } from "../../styled-components/SidebarElements";
import "../../scss/sidebar.scss";
import { VideoBackground } from "../../styled-components/VideoElements";

const Sidebar = ({ toggle2, isOpen2 }) => {
  return (
    <VideoBackground toggle={isOpen2} onClick={toggle2}>
      <SidebarClose onClick={toggle2}>Close</SidebarClose>
    </VideoBackground>
  );
};

export default Sidebar;
