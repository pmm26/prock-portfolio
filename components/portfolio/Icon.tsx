type IconName =
  | "arrow"
  | "upRight"
  | "down"
  | "download"
  | "gitlab"
  | "back"
  | "plus"
  | "window"
  | "braces"
  | "servers"
  | "up";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  upRight: <path d="M5 19 19 5M6 5h13v13" />,
  down: <path d="M12 4v15m-6-6 6 6 6-6" />,
  up: <path d="M12 20V5m-6 6 6-6 6 6" />,
  back: <path d="M20 12H5m6-6-6 6 6 6" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />,
  plus: <path d="M4 12h16m-8-8v16" />,
  gitlab: (
    <path d="m12 21 9-7-3-10-2.4 6H8.4L6 4 3 14l9 7Zm0 0L8.4 10m3.6 11 3.6-11" />
  ),
  window: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M3 9h18M8 9v10" />
    </>
  ),
  braces: (
    <path d="M8.5 3H7a2 2 0 0 0-2 2v4c0 1.5-1 2.5-2.5 3C4 12.5 5 13.5 5 15v4a2 2 0 0 0 2 2h1.5m7-18H17a2 2 0 0 1 2 2v4c0 1.5 1 2.5 2.5 3-1.5.5-2.5 1.5-2.5 3v4a2 2 0 0 1-2 2h-1.5" />
  ),
  servers: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M6.5 6.5H8m-1.5 11H8" />
    </>
  ),
};
export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
