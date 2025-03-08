import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons ";
export default function Layout() {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto">
        {/* Navbar (Visible on All Pages) */}
        <Navbar />

        {/* Social Icons (Fixed on All Pages) */}
        <div className="fixed top-30 right-50 z-50">
          <SocialIcons />
        </div>

        {/* Outlet to Render Page Content */}
        <Outlet />
      </div>
    </div>
  );
}
