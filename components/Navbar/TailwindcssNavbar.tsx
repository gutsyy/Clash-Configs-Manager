import { Navbar, createStyles } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

export type NavLink = {
  name: string;
  link: string;
};

export type NavLinkGroups = {
  groupName: string;
  children: NavLink[];
}[];

type Props = {
  linkGroups: NavLinkGroups;
  selected?: string;
};

export const TailwindcssNavbar = ({ linkGroups, selected = "" }: Props) => {
  const router = useRouter();

  /** 导航选择事件 */
  const onNavLinkClick = (navLink: NavLink) => {
    router.push(navLink.link);
  };

  const navMenu = linkGroups.map((group, i) => (
    <div key={i} className="ml-2">
      <div className="mt-8 text-slate-900 font-semibold mb-2">
        {group.groupName}
      </div>
      <div className="border-solid border-0 border-l border-slate-200">
        {group.children.map((link, i) => (
          <div
            key={i}
            className="-ml-px mt-3"
            onClick={() => onNavLinkClick(link)}
          >
            {link.link !== selected ? (
              <div className="border-solid border-0 pl-4 text-slate-700 border-l border-slate-200 hover:text-slate-900 hover:border-slate-400 hover:cursor-pointer">
                {link.name}
              </div>
            ) : (
              <div
                key={i}
                className="border-solid border-0 pl-4 text-sky-500 font-semibold border-l border-current hover:cursor-pointer"
              >
                {link.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <>
      <Navbar
        className="font-mono border-0"
        height={800}
        width={{ sm: 250 }}
        p="md"
      >
        <Navbar.Section className="text-center font-bold">
          Clash Configs Manager
        </Navbar.Section>
        <Navbar.Section className="text-sm">{navMenu}</Navbar.Section>
      </Navbar>
    </>
  );
};
