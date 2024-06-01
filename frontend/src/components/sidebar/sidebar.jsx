// src/components/sidebar/Sidebar.jsx
import React from "react";
import SearchInput from "./searchInput"; // Ensure this path is correct
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3 " />
      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  );
};

export default Sidebar;
