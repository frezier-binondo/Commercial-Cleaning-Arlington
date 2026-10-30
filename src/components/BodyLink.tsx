import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface BodyLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  title?: string;
}

export const BodyLink: React.FC<BodyLinkProps> = ({
  href,
  children,
  external = false,
  className = "",
  title,
}) => {
  const isExternal = external || href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title || `Visit external resource: ${children}`}
        className={`body-link text-sky-600 hover:text-sky-700 font-semibold underline underline-offset-4 decoration-sky-400 hover:decoration-sky-600 hover:bg-sky-50 px-1 py-0.5 rounded transition-all inline-flex items-baseline gap-1 ${className}`}
      >
        <span>{children}</span>
        <ExternalLink className="w-3.5 h-3.5 inline-block opacity-75 self-center flex-shrink-0" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      title={title}
      className={`body-link text-sky-600 hover:text-sky-700 font-semibold underline underline-offset-4 decoration-sky-400 hover:decoration-sky-600 hover:bg-sky-50 px-1 py-0.5 rounded transition-all inline-flex items-baseline ${className}`}
    >
      {children}
    </Link>
  );
};

export default BodyLink;
