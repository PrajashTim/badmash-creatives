import Link from "next/link";

interface ButtonOutlineProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ButtonOutline({ href, children, className = "" }: ButtonOutlineProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-transparent text-[#f0ede6] font-sans font-bold text-[13px] tracking-[2px] uppercase px-10 py-[18px] border-2 border-white/25 cursor-pointer transition-all duration-300 hover:border-[#d4a843] hover:text-[#d4a843] ${className}`}
    >
      {children}
    </Link>
  );
}
