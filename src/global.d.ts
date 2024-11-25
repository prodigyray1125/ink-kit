/// <reference types="vite-plugin-svgr/client" />

declare module "*?base64" {
  const value: string;
  export default value;
}

type StringWithAutocomplete<T> = T | (string & Record<never, never>);
