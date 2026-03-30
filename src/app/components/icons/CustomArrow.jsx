/**
 * CustomArrow
 *
 * Shared arrow icon used site-wide for CTAs, navigation, and links.
 * Pass a `className` to control size, color, and transform.
 *
 * Example:
 *   <CustomArrow className="w-10 h-auto text-primary group-hover:translate-x-2 transition-transform" />
 */
export default function CustomArrow({ className }) {
  return (
    <svg
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 12H34M34 12C27 12 23 8 23 1M34 12C27 12 23 16 23 23"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
