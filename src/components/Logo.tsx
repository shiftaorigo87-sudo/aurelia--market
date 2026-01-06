export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold-500"
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 8L24 16H16L20 8Z"
          fill="currentColor"
        />
        <path
          d="M12 20L20 28L28 20H12Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-2xl font-bold text-gold-600">Aurelia Market</span>
    </div>
  );
}
