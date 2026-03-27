import Link from "next/link";

interface ButtonPrimaryProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function ButtonPrimary({
  href,
  children,
  className = "",
  fullWidth = false,
}: ButtonPrimaryProps) {
  return (
    <Link
      href={href}
      className={`btn-bar inline-flex items-center gap-2 bg-[#d4a843] text-[#1a1a2e] font-sans font-bold text-[13px] tracking-[2px] uppercase px-10 py-[18px] border-2 border-[#d4a843] cursor-pointer transition-all duration-300 relative hover:bg-[#e8c45a] hover:border-[#e8c45a] ${fullWidth ? "w-full justify-center" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
