/**
 * @file Etc (페이지)
 * @author h.s.Song
 */

import { useEffect, useRef, useState } from "react";

function Etc() {
  const introRef = useRef<HTMLDivElement>(null);

  const isVisible = useState<boolean>(false);

  const onCheck = (entries: IntersectionObserverEntry[]) => {
    const entry = entries;
    console.log("check!!", entry);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onCheck, options);

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={introRef} style={{ height: "2000px" }}>
        <div style={{ height: "500px" }}>첫 번째</div>
        <div style={{ height: "500px" }}>두 번쨰</div>
        <div style={{ height: "500px" }}>세 번쨰</div>
        <div style={{ height: "500px" }}>네 번쨰</div>
      </div>
    </>
  );
}

export default Etc;
