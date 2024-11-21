import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/tailwind.css";
import "./theme.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light-background",
      values: [
        {
          name: "dark-background",
          value: "var(--ink-background-dark)",
        },
        {
          name: "light-background",
          value: "var(--ink-background-light)",
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
        light: "ink-light-theme",
        dark: "ink-dark-theme",
        contrast: "ink-contrast-theme",
        neo: "ink-neo-theme",
        morpheus: "ink-morpheus-theme",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
