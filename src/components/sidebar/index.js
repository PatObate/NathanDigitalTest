import React from "react";

import {
  SidebarBackground,
  SidebarClose,
  SidebarMenu,
  SidebarMenuLink,
} from "../../styled-components/SidebarElements";
import "../../scss/sidebar.scss";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarBackground toggle={isOpen} onClick={toggle}>
      <SidebarClose className="closemenu" onClick={toggle}>
        Close
      </SidebarClose>
      <SidebarMenu className="z2">Home</SidebarMenu>
      <SidebarMenuLink to="/products" className="z2">
        Products
      </SidebarMenuLink>
      <SidebarMenu className="z2">Service and Supports</SidebarMenu>
      <SidebarMenu className="z2">Contact Us</SidebarMenu>
    </SidebarBackground>
  );
};

export default Sidebar;
