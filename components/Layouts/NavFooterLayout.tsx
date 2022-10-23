/**
 * Without <Headbar />
 */

import { useComponentDefaultProps } from "@mantine/core";

type Props = {
  navbar: React.ReactNode;
  navbarClassName?: string;
  contentClassName?: string;
  footer: React.ReactNode;
  children: React.ReactNode;
};

const defaultProps: Partial<Props> = {
  navbarClassName: "bg-gray-50",
  contentClassName: "bg-gray-100",
};

export const NavFooterLayout = (props: Props) => {
  const { navbar, footer, children, navbarClassName, contentClassName } =
    useComponentDefaultProps("NavFooterLayout", defaultProps, props);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex w-full font-mono flex-1">
        <div className={`${navbarClassName}`}>{navbar}</div>
        <div className={`${contentClassName} flex-1 p-4`}>{children}</div>
      </div>
      <div>{footer}</div>
    </div>
  );
};
