import { InkIcon } from "../..";
import { InkLayoutLink } from "../InkLayout/InkNavLink";

export const EXAMPLE_LINKS: InkLayoutLink[] = [
  {
    children: "Home",
    href: "#home",
    icon: <InkIcon.Home />,
    target: "_self",
  },
  {
    children: "Settings",
    href: "#settings",
    icon: <InkIcon.Settings />,
    target: "_self",
  },
];
