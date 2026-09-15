export default function Plus({ color = "#191919" }) {
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
        d="M9 15.5v-12M15 9.5H3"
      />
    </svg>
  );
}
