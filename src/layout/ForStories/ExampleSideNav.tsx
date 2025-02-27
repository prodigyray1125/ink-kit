import { InkLayoutSideNav } from "../InkLayout/InkLayoutSideNav";
import { EXAMPLE_LINKS } from "./ExampleLayoutLinks";

export const ExampleSideNav = () => {
  return (
    <InkLayoutSideNav
      links={EXAMPLE_LINKS}
      bottom={<div>Bottom content</div>}
    />
  );
};
