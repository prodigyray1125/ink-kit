import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import tailwindcss from "tailwindcss";
import { peerDependencies } from "./package.json";
import { Plugin } from "vite";
import fs from "fs";

const base64Loader: Plugin = {
  name: "base64-loader",
  transform(_: any, id: string) {
    const [path, query] = id.split("?");
    if (query != "base64") return null;

    const data = fs.readFileSync(path);
    const base64 = data.toString("base64");
    const extension = path.split(".").pop();

    return `export default 'data:image/${extension};base64,${base64}';`;
  },
};

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "./src/index.ts",
        providers: "./src/providers.index.ts",
      },
      name: "vite-react-ts-button",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      /** "react/jsx-runtime" is needed to support both React 18 and 19, plus it makes the bundle smaller */
      external: [
        "react/jsx-runtime",
        "wagmi/chains",
        ...Object.keys(peerDependencies),
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts(),
    svgr({
      include: "**/*.svg?react",
    }),
    base64Loader,
  ],
  css: {
    postcss: {
      plugins: [tailwindcss("./tailwind.config.mjs")],
    },
  },
});
