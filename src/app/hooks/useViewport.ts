import type { Viewport } from "@/utils/viewport";
import { useEffect, useState } from "react";

export const useViewport = () => {
  const [viewport, setViewport] = useState<Viewport>("mobile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setViewport("mobile");
      else if (window.innerWidth < 1024) setViewport("tablet");
      else setViewport("desktop");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [viewport, setViewport];
};
