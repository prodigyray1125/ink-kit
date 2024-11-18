import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import tailwindcss from "tailwindcss";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "vite-react-ts-button",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      /** "react/jsx-runtime" is needed to support both React 18 and 19, plus it makes the bundle smaller */
      external: ["react/jsx-runtime", ...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss("./tailwind.config.mjs")],
    },
  },
});
