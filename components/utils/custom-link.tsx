import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      {children}
    </Link>
  );
};
export default CustomLink;
