"use client";

import React, { useEffect } from "react";
import tocbot from "tocbot";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -100,
      headingsOffset: 100,
    });

    return () => tocbot.destroy();
  }, []);
  return (
    <div className='sticky top-24 ml-12'>
      <h2 className='mb-3 pl-3 py-1 text-sm font-semibold tracking-wide border-l-4 border-secondary'>
        TOC
      </h2>
      <div className='toc px-1 py-2 text-sm leading-6'></div>
    </div>
  );
}
