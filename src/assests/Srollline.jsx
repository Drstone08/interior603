import React from 'react';
import './css/Scroll.css';

export default function Scrollline() {
  return (
    <div className="relative bg-white text-black py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="whitespace-nowrap animate-marquee">
          <span className="mx-12 text-4xl font-bold">
            This is a scrolling marquee text that moves from right to left continuously.
          </span>
        </div>
      </div>
    </div>
  );
}
