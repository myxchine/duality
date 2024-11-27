"use client";

import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    updateDeviceType(); // Initial check
    window.addEventListener("resize", updateDeviceType); // Update on window resize

    return () => {
      window.removeEventListener("resize", updateDeviceType); // Cleanup
    };
  }, []);

  return isMobile;
};

export default useDeviceType;
