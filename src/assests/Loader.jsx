import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const preloader = document.querySelector("[data-preload]");
    
    const handleLoad = () => {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    };

    window.addEventListener("load", handleLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="preload" data-preload>
      <div className="circle"></div>
      <p className="text">603</p>
    </div>
  );
};

export default Loader;
