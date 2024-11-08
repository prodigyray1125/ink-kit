/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  prefix: "ink-",
  theme: {
    extend: {
      colors: {
        background: {
          dark: "var(--ink-background-dark)",
          container: "var(--ink-background-container)",
          light: "var(--ink-background-light)",
          "light-50": "var(--ink-background-light-50)",
          "light-0": "var(--ink-background-light-0)",
        },
        primary: "var(--ink-primary)",
        "primary-hover": "var(--ink-primary-hover)",
        secondary: "var(--ink-secondary)",
        "secondary-hover": "var(--ink-secondary-hover)",
        "text-default": "var(--ink-text-default)",
        "text-muted": "var(--ink-text-muted)",
        "text-on-primary": "var(--ink-text-on-primary)",
        "text-on-primary-disabled": "var(--ink-text-on-primary-disabled)",
        "text-on-secondary": "var(--ink-text-on-secondary)",
        "text-on-secondary-disabled": "var(--ink-text-on-secondary-disabled)",
        "status-success": "var(--ink-status-success)",
        "status-success-bg": "var(--ink-status-success-bg)",
        "status-alert": "var(--ink-status-alert)",
        "status-alert-bg": "var(--ink-status-alert-bg)",
        "status-error": "var(--ink-status-error)",
        "status-error-bg": "var(--ink-status-error-bg)",
      },
    },
  },
  plugins: [],
};

export default config;
