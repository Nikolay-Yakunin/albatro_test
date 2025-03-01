interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "default";
}

const sizeMap: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 50,
  md: 75,
  lg: 100,
};

const colorMap: Record<NonNullable<LogoProps["color"]>, string> = {
  primary: "var(--primary)",          
  secondary: "var(--secondary)",       
  default: "var(--color-white)",
};

export const Logo = ({
  className = "",
  size = "md",
  color = "default",
  ...rest
}: LogoProps) => {
  // исходный viewBox: 91 x 83
  const width = sizeMap[size];
  const height = (width * 83) / 91;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 91 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.4663 0L90.9326 82.5H0L45.4663 0ZM44.9663 12L51.9663 24L44.9663 27.5L38.4663 23.5L44.9663 12ZM44.9663 33.5L35.4663 29.5L8.96631 76.5L80.9663 77L54.9663 29.5L44.9663 33.5Z"
        fill={colorMap[color]}
      />
    </svg>
  );
};