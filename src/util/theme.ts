export interface DisplayOnProps {
  /**
   * This prop is used to override the default display. For instance, if it is always displayed in a dark container, use `displayOn="black"`.
   * The default value is `auto`, which means the component will adapt based on the theme.
   */
  displayOn?: "auto" | "white" | "black";
}
