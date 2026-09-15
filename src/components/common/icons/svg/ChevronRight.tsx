export default function ChevronRight({ color = "#191919" }: { color: string }) {
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
        fillRule="evenodd"
        d="M6.646 3.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L11.293 9 6.646 4.354a.5.5 0 0 1 0-.708"
        clipRule="evenodd"
      />
    </svg>
  );
}
