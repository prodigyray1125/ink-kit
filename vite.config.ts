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
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
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
