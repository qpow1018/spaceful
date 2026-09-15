export default function CheckCircle({ color = "#C62C1A" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 33 33"
            fill="none"
        >
            <rect width="32" height="32" rx="16.5" fill={color} />
            <path
                d="M10 16.9243L14.4 21.1667L22 11.8333"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
