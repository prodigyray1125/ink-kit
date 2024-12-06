import { EXAMPLE_LINKS } from "./ExampleLayoutLinks";
import {
  InkLayoutMobileNav,
  InkLayoutMobileNavProps,
} from "../InkLayout/MobileNav";

export const ExampleMobileNav = (
  props: Omit<InkLayoutMobileNavProps, "links">
) => {
  return <InkLayoutMobileNav links={EXAMPLE_LINKS} {...props} />;
};
