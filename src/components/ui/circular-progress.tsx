export function CircularProgress({
  value,
  size = "w-78 h-78",
}: {
  value: number;
  size?: string;
}) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`relative ${size}`}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#EEEEEE"
          strokeWidth="1"
          fill="transparent"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#111111"
          strokeWidth="1"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
        />
      </svg>

      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: "translate(-50%, -50%)",
          color: "#111111",
          fontSize: "48px",
        }}
      >
        {value}%
      </div>
    </div>
  );
}
