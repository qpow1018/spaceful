export default function ChevronUp({ color = "#191919" }: { color: string }) {
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
        d="m4 11 5-5 5 5"
      />
    </svg>
  );
}
