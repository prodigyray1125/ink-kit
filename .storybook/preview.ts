import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/tailwind.css";
import "./theme.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "theme",
      values: [
        {
          name: "theme",
          value: "var(--ink-storybook-theme-color)",
        },
        {
          name: "container",
          value: "var(--ink-background-container)",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "",
        dark: "ink-dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
