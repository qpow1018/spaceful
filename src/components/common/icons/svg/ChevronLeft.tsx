import * as React from "react";

export default function ChevronLeft({ color = "#191919" }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 4 6 9l5 5"
      />
    </svg>
  );
}
