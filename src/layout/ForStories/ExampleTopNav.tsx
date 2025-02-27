import { SegmentedControl } from "../../components/SegmentedControl";

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
