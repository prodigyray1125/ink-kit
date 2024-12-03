import { SegmentedControl } from "../../components";

export const ExampleTopNav = () => {
  return (
    <SegmentedControl
      options={[
        { children: "Home", value: "home", selectedByDefault: true },
        { children: "Settings", value: "settings" },
      ]}
      onOptionChange={() => {}}
    />
  );
};
