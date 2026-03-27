interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[3px] uppercase text-[#d4a843] mb-4 block ${className}`}
    >
      {children}
    </span>
  );
}
