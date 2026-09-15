export default function ChevronDown({ color = "#191919" }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M14 7L9 12L4 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
