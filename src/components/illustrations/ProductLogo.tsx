/**
 * Placeholder SVG para logos de produtos.
 * Troque por <Image src="/logos/datatrade.svg" ... /> quando tiver os arquivos finais.
 */
export function ProductLogo({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(/(?=[A-Z])/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-2xl gradient-icon text-lg font-bold text-white shadow-lg shadow-brand-violet/20 ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
