import fs from 'fs';
import css from "rollup-plugin-import-css";
import livereload from "rollup-plugin-livereload";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import serve from "rollup-plugin-serve";
import url from '@rollup/plugin-url';

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const packageJSONRaw = fs.readFileSync('./package.json', 'utf8');
const pkg = JSON.parse(packageJSONRaw);

const NODE_ENV_PRODUCTION = "production";
const nodeEnv = process.env.NODE_ENV || NODE_ENV_PRODUCTION;
const inputFileName = "src/index.tsx";
const extensions = [".js", ".jsx", ".ts", ".tsx"];

const config = {
  input: inputFileName,
  plugins: [
    nodeEnv === "production" && peerDepsExternal(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(nodeEnv),
      preventAssignment: true,
    }),
    json(),
    resolve({
      browser: true,
      extensions,
    }),
    commonjs({
      include: "**/node_modules/**",
    }),
    babel({
      extensions,
      babelHelpers: "runtime",
      include: ["src/**/*"],
    }),
    css(),
    nodeEnv !== "production" &&
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    url({
      include: ["**/*.ttf", "**/*.woff", "**/*.woff2"],
      limit: Infinity,
    }),
    nodeEnv !== "production" && livereload(),
  ],
  output:
<<<<<<< HEAD
      nodeEnv === "production"
          ? [
            {
              format: "es",
              dir: pkg.module.replace(/\/index.js$/, ""),
              sourcemap: false,
              plugins: [terser()]
            },
            {
              file: pkg.main,
              format: "cjs",
              sourcemap: false,
              plugins: [typescript()],
            },
          ]
          : [
            {
              format: "iife",
              name: "stormPlayer",
              dir: pkg.module.replace(/\/index.js$/, ""),
              sourcemap: true,
            },
          ],
=======
    nodeEnv === "production"
      ? [
          {
            format: "es",
            dir: pkg.module.replace(/\/index.js$/, ""),
            sourcemap: false,
            plugins: [terser()],
          },
          {
            file: pkg.main,
            format: "cjs",
            sourcemap: false,
            plugins: [typescript()],
          },
        ]
      : [
          {
            format: "iife",
            name: "stormPlayer",
            dir: pkg.module.replace(/\/index.js$/, ""),
            sourcemap: true,
          },
        ],
>>>>>>> c1839057d8515836d7c9ea90b8441db866a441c5
};

export default config;
