import { Decorator } from "@storybook/react";

export const ContainerColor: Decorator = (Story) => {
  return (
    <div className="ink:bg-background-container">
      <Story />
    </div>
  );
};
