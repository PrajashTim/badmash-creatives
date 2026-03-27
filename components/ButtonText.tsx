import Link from "next/link";

interface ButtonTextProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function ButtonText({ href, children, className = "", light = false }: ButtonTextProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-sans font-bold text-[13px] tracking-[2px] uppercase py-3 border-b-2 transition-all duration-300 ${
        light
          ? "text-[#f0ede6] border-[#f0ede6] hover:text-[#d4a843] hover:border-[#d4a843]"
          : "text-[#1a1a2e] border-[#1a1a2e] hover:text-[#d4a843] hover:border-[#d4a843]"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
