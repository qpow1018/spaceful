export default function MoreHorizontal({ color = "#8A8A8A" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      />
    </svg>
  );
}
