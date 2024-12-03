import { InkIcon } from "../..";
import { InkLayoutSideNav } from "../InkLayout";

export const ExampleSideNav = () => {
  return (
    <InkLayoutSideNav
      links={[
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
      ]}
    />
  );
};
