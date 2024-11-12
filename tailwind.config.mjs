/** @type {import('tailwindcss').Config} */

export const spacing = {
  0.5: "var(--ink-spacing-4)",
  1: "var(--ink-spacing-8)",
  1.5: "var(--ink-spacing-12)",
  2: "var(--ink-spacing-16)",
  2.5: "var(--ink-spacing-20)",
  3: "var(--ink-spacing-24)",
  4: "var(--ink-spacing-32)",
  5: "var(--ink-spacing-40)",
  6: "var(--ink-spacing-48)",
  8: "var(--ink-spacing-64)",
  12: "var(--ink-spacing-96)",
  16: "var(--ink-spacing-128)",
};

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  prefix: "ink-",
  theme: {
    gap: spacing,
    padding: spacing,
    margin: spacing,
    spacing: spacing,
    fontFamily: {
      default: "var(--ink-default-font)",
    },
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
      "primary-pressed": "var(--ink-primary-pressed)",
      secondary: "var(--ink-secondary)",
      "secondary-hover": "var(--ink-secondary-hover)",
      "secondary-pressed": "var(--ink-secondary-pressed)",
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
    fontSize: {
      h1: ["var(--ink-font-size-h1)", "var(--ink-font-line-height-h1)"],
      h2: ["var(--ink-font-size-h2)", "var(--ink-font-line-height-h2)"],
      h3: ["var(--ink-font-size-h3)", "var(--ink-font-line-height-h3)"],
      h4: ["var(--ink-font-size-h4)", "var(--ink-font-line-height-h4)"],
      "body-1": [
        "var(--ink-font-size-body-1)",
        "var(--ink-font-line-height-body-1)",
      ],
      "body-2": [
        "var(--ink-font-size-body-2)",
        "var(--ink-font-line-height-body-2)",
      ],
      "body-3": [
        "var(--ink-font-size-body-3)",
        "var(--ink-font-line-height-body-3)",
      ],
      caption: [
        "var(--ink-font-size-caption)",
        "var(--ink-font-line-height-caption)",
      ],
      "caption-2": [
        "var(--ink-font-size-caption-2)",
        "var(--ink-font-line-height-caption-2)",
      ],
    },
    borderRadius: {
      full: "var(--ink-border-radius-full)",
      24: "var(--ink-border-radius-24)",
      16: "var(--ink-border-radius-16)",
      8: "var(--ink-border-radius-8)",
    },
  },
  plugins: [],
};

export default config;
