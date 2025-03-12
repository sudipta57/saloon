import React from "react";

export default function SocialIcons() {
  return (
<div className="max-w-[1200px]">
  <div className="fixed top-1/3 right-4 z-50 flex flex-col space-y-4"> 
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="/social/fb.png" alt="Facebook" className="w-10 h-10" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="/social/insta.png" alt="Instagram" className="w-10 h-10" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <img src="/social/youtube.png" alt="YouTube" className="w-10 h-10" />
    </a>
  </div>
</div>


  );
}
