import { InkIcon } from "../..";
import { InkLayoutLink } from "../InkLayout/InkNavLink";

export const EXAMPLE_LINKS: InkLayoutLink[] = [
  {
    children: "Home",
    href: "#home",
    leftIcon: <InkIcon.Home />,
    target: "_self",
    active: true,
  },
  {
    children: "Settings",
    href: "#settings",
    leftIcon: <InkIcon.Settings />,
    target: "_self",
  },
];
